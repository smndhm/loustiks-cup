<script setup>
import { paramCase } from "param-case";
</script>

<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">Loustiks Cup</p>
        <p class="subtitle">Stade Landévantais</p>
      </div>
    </div>
  </div>
  <div class="has-text-centered">
    <div class="buttons has-addons is-centered">
      <RouterLink class="button is-info is-outlined" to="/categories"
        >Voir les catégories</RouterLink
      >
      <RouterLink
        v-for="(categorie, index) in $categories"
        :key="index"
        class="button is-info is-outlined"
        :to="`/categories/${paramCase(categorie)}`"
      >
        {{ categorie }}
      </RouterLink>
    </div>
    <RouterLink class="button is-info is-outlined" to="/matchs"
      >Voir la liste des matchs</RouterLink
    >
  </div>
</template>
