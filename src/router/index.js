import { createRouter, createWebHashHistory } from "vue-router";
import { getStore } from "@/utils/storage.js";
import { getUserInfo } from "@/api/index.js";
import store from "@/store/index.js";
const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "home",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "college",
        name: "college",
        meta: {
          title: "海神学院",
        },
        component: () => import("@/views/College.vue"),
      },
      {
        path: "service",
        name: "service",
        meta: {
          title: "海神服务",
        },
        component: () => import("@/views/Service.vue"),
      },
      {
        path: "lecture",
        name: "lecture",
        meta: {
          title: "活动讲座",
        },
        component: () => import("@/views/Lecture.vue"),
      },
      {
        path: "answer",
        name: "answer",
        meta: {
          title: "回答",
        },
        component: () => import("@/views/Answer.vue"),
      },
      {
        path: "user",
        name: "user",
        meta: {
          title: "会员中心",
        },
        component: () => import("@/views/User.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      requireAuth: false,
    },
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const authList = ["/user"];

router.beforeEach((to, from, next) => {
  document.title = "波塞冬-" + to.meta.title;
  const token = getStore("token");
  if (token) {
    const name = store.state.name;
    if (name) {
      next();
    } else {
      getUserInfo().then((res) => {
        store.commit("SET_NAME", res.username);
        next({ ...to, replace: true });
      });
    }
  } else {
    if (authList.indexOf(to.path) !== -1) {
      next(`/login?redirect=${to.path}`);
    } else {
      next();
    }
  }
});

export default router;
