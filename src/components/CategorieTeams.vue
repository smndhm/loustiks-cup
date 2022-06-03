<script setup>
import { paramCase } from "param-case";
import { getEquipes } from "../services/sheets.service";
// Props
const props = defineProps({
  categorie: String,
});
let equipes = [];
let equipesData = await getEquipes(props.categorie);
for (let i = 1; i < equipesData.length; i++) {
  equipes = equipes.concat(equipesData[i]);
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
        <div v-for="(equipe, index) in equipes" :key="index">
          <router-link
            class="button is-link is-inverted"
            :to="`/categories/${paramCase(props.categorie)}/equipes/${paramCase(
              equipe
            )}`"
          >
            {{ equipe }}
          </router-link>
        </div>
        <router-link
          class="button is-info is-light"
          :to="`/categories/${paramCase(props.categorie)}`"
        >
          Voir le classement des poules
        </router-link>
      </div>
    </div>
  </div>
</template>
