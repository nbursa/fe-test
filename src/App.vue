<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from '@/stores/auth'
import { ref } from "vue";

const authStore = useAuthStore();
let authorized = authStore.authorized;
</script>

<template>
  <!-- <nav>
    {{authorized}}
    <RouterLink to="/">Login Page</RouterLink>
    <RouterLink :class="authorized ? '' : 'protected'" to="/welcome">Confidental Page</RouterLink>
  </nav> -->

  <main>
    {{authorized}}
    <RouterView />
  </main>

</template>

<style lang="scss">
@import "@/styles/base";
@import "@/styles/fonts";
@import "@/styles/colors";
</style>
