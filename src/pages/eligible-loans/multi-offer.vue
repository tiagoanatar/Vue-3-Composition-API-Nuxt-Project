<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Offers Page',
});

definePageMeta({
  layout: 'dashboard-offers',
});
</script>
<!-- TODO: Refactor contentful data for widgets -->
<template>
  <main class="theme-multi-offer container-lg">
    <div class="row">
      <div class="col-12 col-lg-4 theme-multi-offer-header">
        <WidgetsHeaderMultiOffer />
      </div>
      <div class="col-12 col-lg-8">
        <div class="row theme-multi-offer-card">
          <div class="col">
            <WidgetsCardsLoanOriginationPaydayLoan />
          </div>
        </div>
        <div class="row theme-multi-offer-card">
          <div class="col">
            <WidgetsCardsLoanOriginationInstallmentLoan />
          </div>
        </div>
        <div class="row theme-multi-offer-card">
          <div class="col">
            <WidgetsCardsLoanOriginationLineCredit />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
