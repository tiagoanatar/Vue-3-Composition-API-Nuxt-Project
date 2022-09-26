<script setup lang="ts">
import { Pages } from '@/constants/pages';
import { Routes } from '@/constants/pages';

// TODO: replace mock data with contentful data
let data = {
  titleMeta: 'AA | Landing Page',
  heading: 'Instant Results. Instant Relief.',
  // TODO: ask design team what the asterisk should refer to?
  copy: 'Get instant approval results and receive funds within minutes after signing*',
  btnLogin: 'Log In',
  btnJoin: 'Apply Now',
};

definePageMeta({
  layout: false,
  middleware: 'signin',
});

useHead({
  htmlAttrs: { lang: 'en' },
  title: data.titleMeta,
});

// TODO: Removes the error message, temporal approach.
const notification = useNotification();
notification.deleteMessage();
</script>

<template>
  <div class="theme-landing-page">
    <div class="container-fluid theme-landing-container">
      <div class="row justify-content-md-center align-items-md-center">
        <main class="col d-flex justify-content-center">
          <BaseCard :data-test-id="`${Pages.LandingPage}-hero`">
            <template #header>
              <img
                src="~@/assets/images/logo-full-blue.svg"
                alt="Advance America logo mark"
                class="theme-logo-mobile"
              />
              <img
                src="~@/assets/images/logo-full-dark.svg"
                alt="Advance America logo mark"
                class="theme-logo-desktop"
              />
            </template>
            <template #title>
              <h1
                class="card-title"
                :data-testid="`${Pages.LandingPage}-heading`"
              >
                {{ data.heading }}
              </h1>
            </template>
            <template #text>
              <div :data-testid="`${Pages.LandingPage}-text`">
                {{ data.copy }}
              </div>
            </template>
            <!-- TODO: refactor testid approach on links  -->
            <div class="theme-landing-page-button-group">
              <NuxtLink
                :data-testid="`${Pages.LandingPage}-login-cta-mobile`"
                :to="Routes.Login"
                class="theme-btn btn btn-outline-primary"
              >
                {{ data.btnLogin }}
              </NuxtLink>
              <NuxtLink
                :data-testid="`${Pages.LandingPage}-login-cta-desktop`"
                :to="Routes.Login"
                class="theme-btn btn btn-md btn-primary"
              >
                {{ data.btnLogin }}
              </NuxtLink>
              <NuxtLink
                :data-testid="`${Pages.LandingPage}-register-cta`"
                :to="Routes.Zipcode"
                class="theme-btn btn btn-md btn-secondary"
              >
                {{ data.btnJoin }}
              </NuxtLink>
            </div>
          </BaseCard>
        </main>
      </div>
    </div>
  </div>
</template>
