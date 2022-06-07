<script setup>
import { computed } from "vue";
import { paramCase } from "param-case";
// Props
const props = defineProps({
  match: Object,
  withHour: Boolean,
  noCategory: Boolean,
  noPhase: Boolean,
  noCompetition: Boolean,
});
// Computed
const isHomeWinner = computed(() =>
  props.match.domicile.score > props.match.exterieur.score ||
  props.match.domicile.tab > props.match.exterieur.tab
    ? true
    : props.match.domicile.score === props.match.exterieur.score &&
      !props.match.domicile.tab &&
      !props.match.exterieur.tab
    ? null
    : false
);
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
              :class="{ 'is-underlined': isHomeWinner }"
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
                {{ props.match.domicile.score }}
                <span class="is-size-7 tab" v-if="props.match.domicile.tab"
                  >({{ props.match.domicile.tab }})</span
                >
                -
                <span class="is-size-7 tab" v-if="props.match.exterieur.tab"
                  >({{ props.match.exterieur.tab }})</span
                >
                {{ props.match.exterieur.score }}
              </span>
            </template>
            <template v-else> - </template>
            <router-link
              :to="`/categories/${paramCase(
                props.match.categorie
              )}/equipes/${paramCase(props.match.exterieur.equipe)}`"
              :class="{ 'is-underlined': isHomeWinner === false }"
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
          <div class="tags">
            <span class="tag is-info" v-if="!props.noCategory">{{
              props.match.categorie
            }}</span>
            <span
              class="tag is-info is-light"
              v-if="!props.noCompetition && props.match.competition"
              >{{ props.match.competition }}</span
            >
            <span class="tag is-info is-light" v-if="!props.noPhase">{{
              props.match.phase.replace(/ *\([^)]*\) */g, "")
            }}</span>
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
.tab {
  vertical-align: middle;
}
</style>
