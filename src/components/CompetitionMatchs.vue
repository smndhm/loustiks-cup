<script setup>
import { reactive, watch } from "vue";
import MatchDetails from "./MatchDetails.vue";
import { paramCase } from "param-case";
// Props
const props = defineProps({
  competition: String,
  categorie: String,
  matchs: Array,
});

const phases = {
  quarter: "Quarts de finale",
  semi: "Demi-finales",
  final: "Finale",
  classement: "Classement",
};

const competitions = reactive({});

const setCompetitions = (category) => {
  Object.keys(phases).forEach((key) => {
    delete competitions[key];
    competitions[key] = props.matchs.filter(
      (match) =>
        props.competition === match.competition &&
        category === paramCase(match.categorie) &&
        match.phase.replace(/ *\([^)]*\) */g, "") === phases[key]
    );
  });
};
setCompetitions(props.categorie);

watch(
  () => props.categorie,
  (newCategory) => {
    setCompetitions(newCategory);
  }
);
</script>

<template>
  <h3 class="title">{{ props.competition }}</h3>
  <template v-for="(phase, key) in phases" :key="key">
    <template v-if="competitions[key].length">
      <h4 class="subtitle">{{ phase }}</h4>
      <div class="columns is-multiline">
        <div
          class="column is-half"
          v-for="(match, index) in competitions[key]"
          :key="index"
        >
          <match-details
            with-hour
            no-category
            no-phase
            no-competition
            :match="match"
          />
        </div>
      </div>
    </template>
  </template>
</template>
