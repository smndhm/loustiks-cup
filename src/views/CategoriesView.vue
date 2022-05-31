<script setup>
import CategorieTeams from "../components/CategorieTeams.vue";
</script>

<template>
  <h2>Catégories</h2>
  <div class="columns">
    <div class="column" v-for="(categorie, key) in $categories" :key="key">
      <categorie-teams :categorie="categorie" />
    </div>
  </div>
</template>
