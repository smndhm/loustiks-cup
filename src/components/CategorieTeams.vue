<script setup>
import { reactive } from "vue";
import { paramCase } from "param-case";
// Props
const props = defineProps({
  categorie: String,
});
//Get data
const data = await fetch(
  `http://164.132.51.82:8080/tabs/${props.categorie}%20-%20Poules`
).then((r) => r.json());
let equipes = reactive([]);
// Format data
for (let i = 1; i < data.length; i++) {
  equipes = equipes.concat(data[i]);
}
equipes.sort();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h3>
          <router-link :to="`/categories/${paramCase(props.categorie)}`">
            {{ props.categorie }} - {{ equipes.length }} équipes
          </router-link>
        </h3>
        <ul>
          <li v-for="(equipe, index) in equipes" :key="index">
            {{ equipe }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
