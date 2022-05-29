<script setup>
import MatchDetails from "../components/MatchDetails.vue";
import { reactive } from "vue";
//Get data
const data = await fetch(`http://164.132.51.82:8080/tabs/Matchs`).then((r) =>
  r.json()
);

// Create matchs
let heures = reactive([]);

// Create Match object
const setMatch = (
  heure,
  terrain,
  [
    equipeDomicile,
    equipeExterieure,
    scoreDomicile,
    scoreExterieur,
    categorie,
    phase,
    competition,
    arbitre,
  ]
) => {
  if (equipeDomicile && equipeExterieure) {
    return {
      heure,
      terrain,
      domicile: {
        equipe: equipeDomicile,
        score: scoreDomicile === "" ? null : parseInt(scoreDomicile, 10),
      },
      exterieur: {
        equipe: equipeExterieure,
        score: scoreExterieur === "" ? null : parseInt(scoreExterieur, 10),
      },
      categorie,
      phase,
      competition,
      arbitre,
    };
  } else return;
};

// Get terrains
const [terrain1, terrain2] = data[0].filter((row) => row !== "");

for (let i = 2; i < data.length; i++) {
  const heure = data[i].shift();
  const match1 = setMatch(heure, terrain1, data[i].slice(0, 9));
  const match2 = setMatch(heure, terrain2, data[i].slice(8));

  if (match1 && match2)
    heures.push({
      heure,
      matchs: [match1, match2],
    });
}
</script>

<template>
  <h2>Matchs</h2>
  <template v-for="heure in heures" :key="heure.heure">
    <h3>
      {{ heure.heure }}
    </h3>
    <div class="columns">
      <div class="column" v-for="(match, index) in heure.matchs" :key="index">
        <match-details :match="match" />
      </div>
    </div>
  </template>
</template>
