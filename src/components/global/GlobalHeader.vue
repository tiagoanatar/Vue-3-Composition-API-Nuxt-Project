<script setup lang="ts">
import { Routes } from '@/constants/pages';

let data = {
  homeLinkText: 'Home',
  componentLibText: 'Component Library',
  landingPageText: 'Landing Page',
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          <img
            src="~@/assets/images/logo-full-dark.svg"
            alt="Advance America Logo"
          />
        </NuxtLink>
        <div class="navbar-nav">
          <NuxtLink :to="Routes.ComponentLibrary" class="nav-link">
            {{ data.componentLibText }}
          </NuxtLink>
          <NuxtLink :to="Routes.Landing" class="nav-link">
            {{ data.landingPageText }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
// TODO: delete this entire style block when actual design is implemented
.navbar-brand {
  padding: 0;
  margin-top: -12px;
}
</style>
