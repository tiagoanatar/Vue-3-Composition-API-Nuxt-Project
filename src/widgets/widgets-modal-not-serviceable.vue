<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-personal-address-servicing-area'
);
const testId = 'not-serviceable';
const emit = defineEmits(['handleHide']);

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
      v-if="data?.modal.headline"
      id="in-store"
      background="blue-image"
      :data-test-id="testId"
      :show-me="showModal"
      @handle-hide="emit('handleHide')"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal.headline }}</h1>
          <p>{{ data?.modal.subheadline }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          variation="secondary"
          :data-test-id="testId"
          :label="data?.modal.ctaLabel"
          @click="emit('handleHide')"
        />
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
