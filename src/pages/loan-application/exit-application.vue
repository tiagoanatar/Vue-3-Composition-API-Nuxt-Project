<script setup lang="ts">
const { getApplication } = useExitAplication();
import { Routes } from '@/constants/pages';

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Exit',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'auth',
});

onMounted(async () => {
  // Validate if there is information related to save and exit
  if (!getApplication.value?.applicationId) {
    const router = useRouter();
    router.push(Routes.Dashboard);
  }
});
</script>

<template>
  <main>
    <div class="theme-loan-application">
      <WidgetsHeaderLoanApplicationExit />
      <WidgetsDescriptionLoanApplicationExit />
      <WidgetsFormLoanApplicationExit />
    </div>
  </main>
</template>
