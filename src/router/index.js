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
      path: "/categories/:category/poules/:tab",
      name: "categorie-tab",
      component: () => import("../views/CategorieView.vue"),
    },
    {
      path: "/categories/:category/equipes/:equipe",
      name: "equipe",
      component: () => import("../views/EquipeView.vue"),
    },
    {
      path: "/reglement",
      name: "reglement",
      component: () => import("../views/ReglementView.vue"),
    },
    {
      path: "/matchs",
      name: "matchs",
      component: () => import("../views/MatchsView.vue"),
    },
  ],
});

export default router;
