<script setup>
import { paramCase } from "param-case";
// Props
const props = defineProps({
  match: Object,
  withHour: Boolean,
  noCategory: Boolean,
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="block">
          <h4>
            <router-link
              :to="`/categories/${paramCase(
                props.match.categorie
              )}/equipes/${paramCase(props.match.domicile.equipe)}`"
            >
              {{ props.match.domicile.equipe }}
            </router-link>
            <template
              v-if="
                props.match.domicile.score !== null &&
                props.match.exterieur.score !== null
              "
            >
              <span class="mx-3">
                {{ props.match.domicile.score }} -
                {{ props.match.exterieur.score }}
              </span>
            </template>
            <template v-else> - </template>
            <router-link
              :to="`/categories/${paramCase(
                props.match.categorie
              )}/equipes/${paramCase(props.match.exterieur.equipe)}`"
            >
              {{ props.match.exterieur.equipe }}
            </router-link>
          </h4>
        </div>
        <div>
          <template v-if="props.withHour">
            <div>
              <span class="icon-text">
                <span class="icon is-small">
                  <img src="/heure.svg" alt="Heure" />
                </span>
                <span>{{ props.match.heure }}</span>
              </span>
            </div>
          </template>
          <div>
            <span class="icon-text">
              <span class="icon">
                <img src="/terrain.svg" alt="Terrain" />
              </span>
              <span>{{ props.match.terrain }}</span>
            </span>
          </div>
          <template v-if="props.match.arbitre">
            <div>
              <span class="icon-text">
                <span class="icon is-small">
                  <img src="/arbitre.svg" alt="Arbitre" />
                </span>
                <span>{{ props.match.arbitre }}</span>
              </span>
            </div>
          </template>
          <div v-if="!props.noCategory">
            <span class="tag is-info">{{ props.match.categorie }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-text {
  align-items: center;
}
</style>
