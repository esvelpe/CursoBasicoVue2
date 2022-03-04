import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import AboutView from "@/views/AboutView";
import ErrorView from "@/views/ErrorView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "*",
      name: "Error",
      component: ErrorView,
    },
  ],
});
