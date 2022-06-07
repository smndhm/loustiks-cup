<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
import PouleClassement from "../components/PouleClassement.vue";
import CompetitionMatchs from "../components/CompetitionMatchs.vue";
import { getAllMatchs, getEquipes } from "../services/sheets.service";

const route = useRoute();
const poules = reactive({});
const matchs = await getAllMatchs();

const setPoules = async (category) => {
  // Empty poules
  Object.keys(poules).forEach((key) => delete poules[key]);
  // Set poules
  const data = await getEquipes(category);
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
  <h3>Poules</h3>
  <template v-for="(poule, key) in poules" :key="key">
    <h4>{{ key }}</h4>
    <poule-classement
      :poule="poule"
      :categorie="route.params.category"
      :matchs="matchs"
    />
  </template>
  <competition-matchs
    v-for="(competition, key) in $competitions[route.params.category]"
    :competition="competition"
    :categorie="route.params.category"
    :matchs="matchs"
    :key="key"
  />
</template>

<style lang="scss" scoped>
.content ul {
  margin-left: 0;
  margin-top: 0;
}
</style>
