<script setup>
import { reactive } from "vue";
import { paramCase } from "param-case";

//Get data
const data = await fetch(
  "http://164.132.51.82:8080/tabs/U11%20-%20Poules"
).then((r) => r.json());
const poules = reactive({});
// Format data
data.forEach((row) => {
  const key = row.shift();
  poules[key] = row;
});
</script>

<template>
  <h2 class="is-uppercase">{{ $route.params.category }}</h2>
  <div class="tabs is-large">
    <ul>
      <li
        v-for="(poule, key) in poules"
        :class="{ 'is-active': paramCase(key) === $route.params.tab }"
        :key="key"
      >
        <router-link
          :to="`/categories/${$route.params.category}/tabs/${paramCase(key)}`"
          >{{ key }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
