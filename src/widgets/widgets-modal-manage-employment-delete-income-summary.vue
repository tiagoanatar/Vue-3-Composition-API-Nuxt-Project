<script setup lang="ts">
const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-financial-delete-source-income'
);
const testId = 'delete-income';
const emit = defineEmits(['handleHide']);
const { deleteIncomeInfo } = useComposite();

// Sets composite api data validation state
const { getCompositeValidState } = useCompositeValidState();

const incomeId = reactive({
  value: null,
});

interface Props {
  showModal: boolean;
}

async function modalDeleteIncome() {
  incomeId.value = getCompositeValidState;
  await deleteIncomeInfo(incomeId.value);
}

withDefaults(defineProps<Props>(), {
  showModal: false,
});
</script>

<template>
  <ClientOnly>
    <BaseModal
      v-if="data?.modal.headline"
      id="delete-income"
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
          @click="modalDeleteIncome"
          @mousedown="emit('handleHide')"
        />
      </template>
      <template #footer>
        <img v-if="data?.modal.image" alt="" :src="data?.modal.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
