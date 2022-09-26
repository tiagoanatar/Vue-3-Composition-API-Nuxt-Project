<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Dashboard Page',
});

definePageMeta({
  layout: false,
  middleware: 'auth',
});

const {
  isGeneralErrorModalVisible,
  showGeneralErrorModal,
  isContactSupportErrorModalVisible,
} = useErrorModal();

const handleErrorModalVisibility = () => {
  showGeneralErrorModal(false);
};
</script>
<template>
  <WidgetsGlobalNavigation />
  <main class="theme-dashboard">
    <div class="container">
      <div class="row">
        <!-- TODO: Need to discuss the approach regarding using offset or reduce the container size -->
        <div class="col-12 col-md-5 offset-md-1">
          <WidgetsCardDashboardCompleteApplication />
          <WidgetsCardDashboardPaydayLoan />
          <WidgetsCardDashboardNotificationSlider />
          <WidgetsCardDashboardLoanEligibility />
        </div>
        <div class="col-12 col-md-5">
          <WidgetsCardDashboardMoneySlider />
          <WidgetsCardDashboardReferFriend />
        </div>
      </div>
    </div>
    <WidgetsModalGeneralError
      :show-modal="isGeneralErrorModalVisible"
      @handle-hide="handleErrorModalVisibility"
    />
    <WidgetsModalSupportError :show-modal="isContactSupportErrorModalVisible" />
  </main>
  <WidgetsFooterDashboard />
</template>
