<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData('widget-modal-404');
const testId = 'modal-general-error';
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
      id="general-error"
      background="blue-image"
      :data-test-id="testId"
      :show-me="showModal"
      @handle-hide="emit('handleHide')"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1 class="text-center">{{ data?.modal.headline }}</h1>
          <p class="text-center">{{ data?.modal.subheadline }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          variation="secondary"
          :data-test-id="testId"
          :label="data?.modal.ctaLabel"
          @click="emit('handleHide')"
          @mousedown="emit('handleHide')"
        />
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
