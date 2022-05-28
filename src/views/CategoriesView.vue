<script setup>
import CategorieTeams from "../components/CategorieTeams.vue";
</script>

<template>
  <h2>Catégories</h2>
  <categorie-teams
    v-for="(categorie, key) in $categories"
    :categorie="categorie"
    :key="key"
  />
</template>
