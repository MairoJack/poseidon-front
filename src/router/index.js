import { createRouter, createWebHashHistory } from "vue-router";
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
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "college",
        name: "college",
        component: () => import("@/views/College.vue"),
      },
      {
        path: "service",
        name: "service",
        component: () => import("@/views/Service.vue"),
      },
      {
        path: "lecture",
        name: "lecture",
        component: () => import("@/views/Lecture.vue"),
      },
      {
        path: "answer",
        name: "answer",
        component: () => import("@/views/Answer.vue"),
      },
      {
        path: "user",
        name: "user",
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

router.beforeEach((to, from, next) => {
  //document.title = to.meta.title;
  next();
});

export default router;
