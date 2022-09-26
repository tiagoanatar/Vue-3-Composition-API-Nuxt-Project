<script setup lang="ts">
import justMoment from '@/assets/lotties/wait-loading.json';
import { Vue3Lottie } from 'vue3-lottie';

const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-loan-origination-just-a-moment'
);
const testId = 'justMoment';
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
      id="just-a-moment"
      background="transparent"
      :data-test-id="testId"
      :show-me="showModal"
      @handle-hide="emit('handleHide')"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <Vue3Lottie :animation-data="justMoment" :height="200" :width="200" />
          <div class="theme-loan-application-body-copy-transparent">
            <h1>{{ data?.modal?.headline }}</h1>
            <p>{{ data?.modal?.subheadline }}</p>
          </div>
        </LoanApplicationBodyCopy>
      </template>
    </BaseModal>
  </ClientOnly>
</template>
