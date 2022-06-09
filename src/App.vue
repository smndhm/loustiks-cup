<script setup>
import { ref } from "vue";
import { paramCase } from "param-case";
import { RouterLink, RouterView } from "vue-router";
const isActiveBurger = ref(false);
</script>

<template>
  <header>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <h1 class="navbar-item">
          <RouterLink to="/"
            ><figure class="image is-48x48">
              <img src="/logo-stl.svg" alt="" />
            </figure>
            Loustiks Cup</RouterLink
          >
        </h1>
        <div
          class="navbar-burger"
          :class="{ 'is-active': isActiveBurger }"
          data-target="navbarExampleTransparentExample"
          @click="isActiveBurger = !isActiveBurger"
          @keydown="isActiveBurger = !isActiveBurger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isActiveBurger }">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <RouterLink class="navbar-link" to="/categories">
              Catégories
            </RouterLink>
            <div class="navbar-dropdown is-boxed">
              <RouterLink
                v-for="(categorie, index) in $categories"
                :key="index"
                class="navbar-item"
                :to="`/categories/${paramCase(categorie)}`"
              >
                {{ categorie }}
              </RouterLink>
            </div>
          </div>
          <RouterLink class="navbar-item" to="/matchs">Matchs</RouterLink>
        </div>

        <div class="navbar-end">
          <RouterLink class="navbar-item" to="/reglement">
            Règlement
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section class="section content container">
      <Suspense>
        <RouterView />
      </Suspense>
    </section>
  </main>
  <footer class="has-text-centered">
    <p class="my-2">Merci à nos partenaires</p>
    <div class="columns is-vcentered">
      <div class="column">
        <figure class="image is-128x128">
          <img src="/partenaires/carabreizh.png" alt="Carabreizh" />
        </figure>
      </div>
      <div class="column">
        <figure class="image is-128x128">
          <img src="/partenaires/eurovia-vinci.svg" alt="Eurovia Vinci" />
        </figure>
      </div>
      <div class="column">
        <figure class="image is-128x128">
          <img src="/partenaires/md-course.jpg" alt="MD Course" />
        </figure>
      </div>
      <div class="column">
        <figure class="image is-128x128">
          <img src="/partenaires/mercedes.png" alt="Mercedes" />
        </figure>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.image {
  display: inline-block;
  vertical-align: middle;
}

.navbar-item img {
  max-height: none;
}

.image.is-128x128 {
  height: auto;
}
</style>
