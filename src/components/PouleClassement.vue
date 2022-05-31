<script setup>
import { paramCase } from "param-case";
// Props
const props = defineProps({
  poule: Array,
  matchs: Array,
  categorie: String,
});
// Filter matchs
const matchsPoule = props.matchs.filter(
  (match) =>
    props.categorie === paramCase(match.categorie) &&
    (props.poule.includes(match.domicile.equipe) ||
      props.poule.includes(match.exterieur.equipe))
);
// Table template
const tableTemplate = {
  played: 0,
  won: 0,
  lost: 0,
  tied: 0,
  scored: 0,
  conceded: 0,
  difference: 0,
  points: 0,
};
// Set table data
const teamResults = {};
// Set team match data
const setTeamMatchData = (team1, team2) => {
  if (!teamResults[team1.equipe])
    teamResults[team1.equipe] = { ...tableTemplate };
  if (team1.score !== null && team2.score !== null) {
    teamResults[team1.equipe].played += 1;
    teamResults[team1.equipe].won += team1.score > team2.score ? 1 : 0;
    teamResults[team1.equipe].lost += team1.score < team2.score ? 1 : 0;
    teamResults[team1.equipe].tied += team1.score === team2.score ? 1 : 0;
    teamResults[team1.equipe].scored += team1.score;
    teamResults[team1.equipe].conceded += team2.score;
    teamResults[team1.equipe].difference =
      teamResults[team1.equipe].scored - teamResults[team1.equipe].conceded;
    teamResults[team1.equipe].points =
      teamResults[team1.equipe].won * 4 +
      teamResults[team1.equipe].tied * 2 +
      teamResults[team1.equipe].lost;
  }
};

matchsPoule.forEach((match) => {
  setTeamMatchData(match.domicile, match.exterieur);
  setTeamMatchData(match.exterieur, match.domicile);
});

const poulesTable = [];
Object.keys(teamResults).forEach((team) => {
  teamResults[team].team = team;
  poulesTable.push(teamResults[team]);
});

poulesTable.sort((a, b) => {
  if (a.points === b.points) {
    if (a.difference === b.difference) {
      if (a.scored === b.scored) {
        return a.team > b.team ? 1 : -1;
      }
      return b.scored - a.scored;
    }
    return b.difference - a.difference;
  }
  return b.points - a.points;
});
</script>

<template>
  <div class="table-container">
    <table class="table is-striped">
      <thead>
        <tr>
          <th>
            <abbr title="Position">P</abbr>
          </th>
          <th>Equipe</th>
          <th><abbr title="Matchs joués">MJ</abbr></th>
          <th><abbr title="Victoires">V</abbr></th>
          <th><abbr title="Matchs nuls">N</abbr></th>
          <th><abbr title="Défaites">D</abbr></th>
          <th><abbr title="Buts marqués">BM</abbr></th>
          <th><abbr title="Buts contre">BC</abbr></th>
          <th><abbr title="Différence de buts">DB</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pouleTable, index) in poulesTable" :key="index">
          <th>{{ index + 1 }}</th>
          <td class="nowrap">
            <router-link
              :to="`/categories/${paramCase(
                props.categorie
              )}/equipes/${paramCase(pouleTable.team)}`"
            >
              {{ pouleTable.team }}
            </router-link>
          </td>
          <td>{{ pouleTable.played }}</td>
          <td>{{ pouleTable.won }}</td>
          <td>{{ pouleTable.tied }}</td>
          <td>{{ pouleTable.lost }}</td>
          <td>{{ pouleTable.scored }}</td>
          <td>{{ pouleTable.conceded }}</td>
          <td>{{ pouleTable.difference }}</td>
          <td>
            {{ pouleTable.points }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.nowrap {
  white-space: nowrap;
}
</style>
