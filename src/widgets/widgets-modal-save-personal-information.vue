<script setup lang="ts">
import { getFormDataValues } from '@/utils/getFormDataValues';
import { Routes } from '@/constants/pages';

const { getApplicationData, postApplication } = useComposite();
const { getModalInfoData } = useContentful();
const { setApplication } = useExitAplication();
const { data } = getModalInfoData('widget-modal-application-exit');
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);

async function handleExitClick() {
  isLoading.value = true;
  const currentRoute = router.currentRoute.value.path;
  // Extract the page name through the current url
  const page =
    Object.entries(Routes).filter((v) => v?.[1] === currentRoute)?.[0]?.[0] ||
    '';
  const form = document.querySelector('form');
  const formData = form ? getFormDataValues(form) : {};
  const query = route?.query || {};
  const queryStrings = Object.keys(query)
    .map((v) => `${v}=${query[v]}`)
    .join('&');

  // Check if the user already has a applicationId...
  let { applicationId = '' } = await getApplicationData();

  if (!applicationId) {
    const response = await postApplication({
      lastApplicationPage: JSON.stringify({
        page,
        query: queryStrings,
        data: formData,
      }),
    });

    applicationId = response?.data?.applicationId || '';
  }

  setApplication(applicationId, page, formData, queryStrings);
  router.push(Routes.ExitAplication);
}
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="exitModal"
      background="blue-image"
      data-test-id="pi-save-modal"
      @handle-hide="isLoading = false"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal?.headline }}</h1>
          <p>
            {{ data?.modal?.subheadline }}
          </p>
        </LoanApplicationBodyCopy>
        <div>
          <BaseButton
            data-test-id="pi-save-modal-exit"
            :label="data?.modal?.ctaLabel"
            :is-loading="isLoading"
            :is-disabled="isLoading"
            variation="secondary"
            @click="handleExitClick"
          />
        </div>
      </template>
      <template #footer>
        <img
          class="theme-modal-footer-image"
          alt=""
          :src="data?.modal?.image"
        />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
