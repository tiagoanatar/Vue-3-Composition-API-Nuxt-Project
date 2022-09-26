<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData('widget-modal-contact-support');
const testId = 'modal-applicant-error';

interface Props {
  showModal: boolean;
}

withDefaults(defineProps<Props>(), {
  showModal: false,
});
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="applicant-error"
      background="blue-image"
      :data-test-id="testId"
      :show-me="showModal"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1 class="text-center">{{ data?.modal.headline }}</h1>
          <p class="text-center">{{ data?.modal.subheadline }}</p>
        </LoanApplicationBodyCopy>
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
