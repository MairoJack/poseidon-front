import axios from "axios";
import { getStore } from "@/utils/storage";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    const token = getStore("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    } else {
      if (res.code === 401) {
        ElMessageBox.confirm("登录过期", "确认退出", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          const store = useStore();
          store.commit("CLEAR");
          location.reload();
        });
      } else {
        ElMessage.error(res.msg);
      }
      return Promise.reject(new Error(res.msg || "Error"));
    }
  },
  (error) => {
    console.log("err" + error);
    ElMessage.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
