<script setup>
import { reactive, watch, computed } from "vue";
import { paramCase } from "param-case";
import { useRoute } from "vue-router";
import PouleClassement from "../components/PouleClassement.vue";
import { getAllMatchs } from "../services/sheets.service";

const route = useRoute();
const poules = reactive({});
const matchs = await getAllMatchs();

const setPoules = async (category) => {
  // Empty poules
  Object.keys(poules).forEach((key) => delete poules[key]);
  // Set poules
  const data = await fetch(
    `http://164.132.51.82:8080/tabs/${category}%20-%20Poules`
  ).then((r) => r.json());
  // Set key
  for (let column = 0; column < data[0].length; column++) {
    poules[data[0][column]] = [];
    // Set values
    for (let row = 1; row < data.length; row++) {
      poules[data[0][column]].push(data[row][column]);
    }
  }
};
setPoules(route.params.category);

const activeTab = computed(() => route.params.tab ?? "poule-a");

watch(
  () => route.params.category,
  async (newCategory) => {
    if (newCategory) {
      setPoules(newCategory);
    }
  }
);
</script>

<template>
  <h2 class="is-uppercase">{{ route.params.category }}</h2>
  <div class="tabs">
    <ul>
      <li
        v-for="(poule, key) in poules"
        :class="{
          'is-active': paramCase(key) === activeTab,
        }"
        :key="key"
      >
        <router-link
          :to="`/categories/${route.params.category}/tabs/${paramCase(key)}`"
          >{{ key }}</router-link
        >
      </li>
    </ul>
  </div>
  <div v-for="(poule, key) in poules" :key="key">
    <poule-classement
      v-if="paramCase(key) === activeTab"
      :poule="poule"
      :categorie="route.params.category"
      :matchs="matchs"
    />
  </div>
</template>

<style lang="scss" scoped>
.content ul {
  margin-left: 0;
  margin-top: 0;
}
</style>
