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

const competitions = reactive({});

const setCompetitions = (category) => {
  Object.keys(competitions).forEach((key) => delete competitions[key]);

  competitions.quarts = props.matchs.filter(
    (match) =>
      props.competition === match.competition &&
      category === paramCase(match.categorie) &&
      match.phase.toLowerCase().replace(/ *\([^)]*\) */g, "") ===
        "quart de finale"
  );

  competitions.half = props.matchs.filter(
    (match) =>
      props.competition === match.competition &&
      category === paramCase(match.categorie) &&
      match.phase.toLowerCase().replace(/ *\([^)]*\) */g, "") === "demi finale"
  );

  competitions.final = props.matchs.filter(
    (match) =>
      props.competition === match.competition &&
      category === paramCase(match.categorie) &&
      match.phase.toLowerCase().replace(/ *\([^)]*\) */g, "") === "finale"
  );

  competitions.classement = props.matchs.filter(
    (match) =>
      props.competition === match.competition &&
      category === paramCase(match.categorie) &&
      match.phase.toLowerCase().replace(/ *\([^)]*\) */g, "") === "classement"
  );
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
  <h3>{{ props.competition }}</h3>
  <template v-if="competitions.quarts.length">
    <h4>Quarts de finale</h4>
    <div class="columns is-multiline">
      <div
        class="column is-half"
        v-for="(match, index) in competitions.quarts"
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
  <template v-if="competitions.half.length">
    <h4>Demi finales</h4>
    <div class="columns is-multiline">
      <div
        class="column is-half"
        v-for="(match, index) in competitions.half"
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
  <template v-if="competitions.half.length">
    <h4>Finale</h4>
    <div class="columns is-multiline">
      <div
        class="column is-half"
        v-for="(match, index) in competitions.final"
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
  <template v-if="competitions.half.length">
    <h4>Autres matchs de classement</h4>
    <div class="columns is-multiline">
      <div
        class="column is-half"
        v-for="(match, index) in competitions.classement"
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
