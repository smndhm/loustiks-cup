<script setup>
// Props
const props = defineProps({
  match: Object,
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="block">
          <h4>
            {{ props.match.domicile.equipe }}
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
            <template v-else>-</template>
            {{ props.match.exterieur.equipe }}
          </h4>
        </div>
        <div>
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
          <div>
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
