<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { paramCase } from "param-case";
import { getAllMatchs } from "../services/sheets.service";
import MatchDetails from "../components/MatchDetails.vue";

const matchs = await getAllMatchs();
const route = useRoute();

const equipeData = {};

const setEquipeMatchs = async (equipe) => {
  Object.keys(equipeData).forEach((key) => delete equipeData[key]);

  equipeData.matchs = matchs.filter(
    (match) =>
      paramCase(match.categorie) === route.params.category &&
      (paramCase(match.domicile.equipe) === equipe ||
        paramCase(match.exterieur.equipe) === equipe)
  );

  equipeData.name =
    paramCase(equipeData.matchs[0].domicile.equipe) === equipe
      ? equipeData.matchs[0].domicile.equipe
      : equipeData.matchs[0].exterieur.equipe;
};
setEquipeMatchs(route.params.equipe);

watch(
  () => route.params.equipe,
  async (newEquipe) => {
    if (newEquipe) {
      setEquipeMatchs(newEquipe);
    }
  }
);
</script>

<template>
  <h2>
    {{ equipeData.name }}
    <span class="tag is-info is-medium">{{
      equipeData.matchs[0].categorie
    }}</span>
  </h2>
  <div class="columns is-multiline">
    <div
      class="column is-half"
      v-for="(match, index) in equipeData.matchs"
      :key="index"
    >
      <match-details with-hour no-category :match="match" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  vertical-align: bottom;
}
</style>
