<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const isActiveBurger = ref(false);
// import HelloWorld from "@/components/HelloWorld.vue";
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

      <div
        id="navbarExampleTransparentExample"
        class="navbar-menu"
        :class="{ 'is-active': isActiveBurger }"
      >
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <RouterLink class="navbar-link" to="/categories">
              Catégories
            </RouterLink>
            <div class="navbar-dropdown is-boxed">
              <RouterLink class="navbar-item" to="/categories/u11">
                U11
              </RouterLink>
              <RouterLink class="navbar-item" to="/categories/u13">
                U13
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <RouterLink class="navbar-item" to="/reglement">
              Règlement
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>
