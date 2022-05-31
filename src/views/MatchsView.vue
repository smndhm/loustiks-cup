<script setup>
import MatchDetails from "../components/MatchDetails.vue";
import { getMatchsByHours } from "../services/sheets.service";
const matchHours = await getMatchsByHours();
</script>

<template>
  <h2>Matchs</h2>
  <template v-for="matchHour in matchHours" :key="matchHour.heure">
    <h3>
      {{ matchHour.heure }}
    </h3>
    <div class="columns">
      <div
        class="column"
        v-for="(match, index) in matchHour.matchs"
        :key="index"
      >
        <match-details v-if="match" :match="match" />
      </div>
    </div>
  </template>
</template>
