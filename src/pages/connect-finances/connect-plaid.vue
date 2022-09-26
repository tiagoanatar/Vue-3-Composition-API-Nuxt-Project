<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Connect Finances Plaid',
  script: [{ src: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js' }],
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});

const env = useEnvironmentVariables();

let connectPlaid = null;

let connectTries = 0;

onMounted(() => {
  env;
  connectPlaid = (<any>window).Plaid.create({
    // TODO: Get link token from PF server
    token: env.variables.value.PLAID_LINK_TOKEN, // This is temporary, please reach out to to generate a new token.
    onSuccess: (public_token, metadata) => {
      // TODO: Remove console.logs. Have left them in to avoid empty methods and help guide developers
      console.log('public_token: ', public_token);
      // TODO: Exchange public token for Access token. Ask PF for endpoint.
      console.log('metadata: ', metadata);
    },
    onLoad: (event) => {
      console.log('onLoad: ', event);
    },
    onExit: (err, metadata) => {
      console.log('err: ', err);
      console.log('metadata: ', metadata);
    },
    onEvent: (eventName, metadata) => {
      console.log('eventName: ', eventName);
      console.log('metadata: ', metadata);
    },
  });
});

const handleConnect = () => {
  // TODO:  This may be taken care of on the backend
  connectTries++;
  if (connectTries < 4) {
    connectPlaid.open();
  } else {
    alert('You are only allowed three attempts to connect to plaid.');
    return;
  }
};
</script>

<template>
  <main>
    <WidgetsHeaderConnectPlaid />
    <WidgetsDescriptionConnectPlaid />
    <!-- TODO: Plaid card will be provided by the plaid service -->
    <div class="theme-connect-plaid-content">
      <p>Plaid content goes here</p>
      <button @click="handleConnect">Connect plaid</button>
      <WidgetsCardsConnectPlaidManually />
    </div>
  </main>
</template>
