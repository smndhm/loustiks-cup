import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:category",
      name: "categorie",
      component: () => import("../views/CategorieView.vue"),
    },
    {
      path: "/categories/:category/tabs/:tab",
      name: "categorie-tab",
      component: () => import("../views/CategorieView.vue"),
    },
    {
      path: "/reglement",
      name: "reglement",
      component: () => import("../views/ReglementView.vue"),
    },
  ],
});

export default router;
