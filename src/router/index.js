import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Telecharger from "../views/Telechargement.vue";
import Details from "../views/Details.vue";
import Authentication from "../views/Authentication.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/telecharger",
    name: "Telecharger",
    component: Telecharger,
  },
  {
    path: "/details/:categorie/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
