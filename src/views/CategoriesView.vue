<script setup>
import { reactive } from "vue";
//Get data
const data = await fetch("http://164.132.51.82:8080/tabs/Equipes").then((r) =>
  r.json()
);
const categories = reactive({});
// Format data
data.forEach((row) => {
  const key = row.shift();
  categories[key] = row;
});
</script>

<template>
  <section class="section content container">
    <h2>Catégories</h2>
    <template v-for="(equipes, key) in categories" :key="key">
      <div class="box">
        <h3>
          <router-link :to="`/categories/${key.toLowerCase()}`">
            {{ key }} - {{ equipes.length }} équipes
          </router-link>
        </h3>
        <ul>
          <li v-for="(equipe, index) in equipes" :key="index">
            {{ equipe }}
          </li>
        </ul>
      </div>
    </template>
  </section>
</template>
