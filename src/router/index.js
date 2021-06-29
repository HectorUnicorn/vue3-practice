import { createRouter, createWebHistory } from "vue-router";
import Recommend from "@/views/recommend.vue";

const routes = [
  {
    path: "/",
    redirect: "/recommend",
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: Recommend,
  },
  {
    path: "/singer",
    name: "Singer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/singer.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import(/* webpackChunkName: "about" */ "../views/search.vue"),
  },
  {
    path: "/top-list",
    name: "TopList",
    component: () => import(/* webpackChunkName: "about" */ "../views/top-list.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
