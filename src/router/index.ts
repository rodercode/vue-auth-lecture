import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView.vue";
import LoginView from "../views/LoginView.vue";
import SigninView from "../views/login/SigninView.vue";
import SignupView from "../views/login/SignupView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/library",
    name: "library",
    component: BookView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    children: [
      {
        path: "",
        name: "signin",
        component: SigninView,
      },
      {
        path: "signup",
        name: "signup",
        component: SignupView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
