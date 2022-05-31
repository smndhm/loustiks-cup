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
          <RouterLink to="/">Loustiks Cup</RouterLink>
        </h1>
        <div
          class="navbar-burger"
          :class="{ 'is-active': isActiveBurger }"
          data-target="navbarExampleTransparentExample"
          @click="isActiveBurger = !isActiveBurger"
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
</template>
