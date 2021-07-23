import request from "@/utils/request";

/**
 * 登录
 */
export function login(data) {
  return request({
    url: "/api/users/login",
    method: "post",
    data,
  });
}

/**
 * 注册
 */
export function register(data) {
  return request({
    url: "/api/users/register",
    method: "post",
    data,
  });
}

/**
 * 获取登录人信息
 */
export function getUserInfo() {
  return request({
    url: "/api/users/info",
    method: "get",
  });
}

/**
 * 获取活动讲座分页
 */
export function getLecturePage(params) {
  return request({
    url: "/api/lectures",
    method: "get",
    params,
  });
}

/**
 * 获取活动讲座详情
 */
export function getLecture(id) {
  return request({
    url: "/api/lectures/" + id,
    method: "get",
  });
}
