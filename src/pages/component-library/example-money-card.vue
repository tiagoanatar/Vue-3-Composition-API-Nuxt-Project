<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Money Card Component',
});

//TODO : wire CMS data
const moneyCardData = [
  {
    dataTestId: 'visa-prepaid-card-1',
    copy: 'Get paid and pay bills faster with a Visa prepaid money card.',
    title: 'Visa Prepaid',
    cardType: 'visa',
    logo: 'http://res.cloudinary.com/purpose-financial/image/upload/v1657193216/dev/logos/visa-logo_dwixa7.svg',
  },
  {
    dataTestId: 'visa-prepaid-card-2',
    copy: 'Get paid and pay bills faster with a Visa prepaid money card.',
    title: 'Western Union',
    cardType: 'westernUnion',
    logo: 'http://res.cloudinary.com/purpose-financial/image/upload/v1657193283/dev/logos/western-union-logo_rqsl4w.svg',
  },
];
</script>

<template>
  <div class="container">
    <h2>Money Card Component</h2>
    <br />
    <MoneyCardSlider
      :data="moneyCardData"
      section-title="More services to move and manage money"
      data-test-id="money-card-slider"
      :is-loading="false"
    />
    <br />
  </div>
</template>
