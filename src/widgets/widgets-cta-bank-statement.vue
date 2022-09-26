<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { DocType } from '@/constants/docType';
import { IconNames } from '@/constants/icons';

const { getCtaData } = useContentful();
const { mapCtaRoutes } = useCtaRoute();

const { data, pending } = getCtaData('widget-ctas-bank-statement');
const { cancelUploadDocument, getDocuments, uploadDocument } =
  useUploadDocuments(DocType.BANK_ACCOUNT_STATEMENT);

enum UITypes {
  BUTTONS = 'buttons',
  UPLOAD = 'upload',
  DOCUMENTS = 'documents',
}

const id = 'bank-statement';
const alertMessage = ref('');
const documents = ref([]);
const isLoadingFiles = ref(false);
const progress = ref(0);
const showUI = ref(UITypes.BUTTONS);
/*
  TODO: The CMS should return a unique identifier per button,
  in order to be able to identify them, at the moment
  the only value to do so is the label, which could change.
*/
const CONNECT_WITH_PLAID = 'Connect with Plaid';
const BUTTONS = ['Connect with Plaid', 'Upload an image'];

const LABELS = ref({
  ADD_ANOTHER_DOCUMENT: '+ Add another document',
  DONE: 'Done',
  UPLOADED_DOCUMENTS: 'Uploaded Documents',
});

const handleSubmitFile = async ({ error, file }) => {
  alertMessage.value = '';
  progress.value = 0;
  isLoadingFiles.value = false;

  if (!error && file) {
    showUI.value = UITypes.UPLOAD;
    const response = await uploadDocument(
      file,
      (percentage = 0) => (progress.value = percentage)
    );

    if (!response.error && !response?.response?.data?.errors) {
      isLoadingFiles.value = true;
      showUI.value = UITypes.DOCUMENTS;
      documents.value = await getDocuments();
      isLoadingFiles.value = false;
    } else {
      alertMessage.value =
        response?.error ||
        response?.response?.data?.errors?.[0]?.detail ||
        'Something went wrong, please try again.';
      showUI.value = UITypes.BUTTONS;
    }
  } else {
    alertMessage.value = error;
  }
};

const handleCancelSubmit = () => {
  showUI.value = UITypes.BUTTONS;
  cancelUploadDocument();
};
</script>
<template>
  <div class="row theme-cta-proof-income">
    <BaseAlert
      v-if="alertMessage"
      :data-test-id="`${id}-alert`"
      :message="alertMessage"
    />
    <template
      v-for="(item, index) in data?.ctaList"
      :key="`cta-item-${item.label}`"
    >
      <div
        v-if="showUI === UITypes.BUTTONS && BUTTONS.includes(item.label)"
        class="col-12"
      >
        <BaseSkeletonLoader
          :is-loading="pending"
          :rows="[{ col: 8, size: 'lg' }]"
        >
          <BaseCard
            v-if="item.label === CONNECT_WITH_PLAID"
            is-base-card
            :data-test-id="`${id}-card-${index}`"
          >
            <BaseKeyValueText
              :data-test-id="`${id}-text-${index}`"
              text-direction="row"
              :is-loading="pending"
            >
              <template #label>
                <p>{{ item?.label || '' }}</p>
              </template>
              <template #value>
                <NuxtLink
                  :to="`${mapCtaRoutes(item.label)}?page=${id}`"
                  :data-testid="`${id}-link-${index}`"
                  :aria-label="item?.label || ''"
                  ><BaseIcon :name="IconNames.ArrowRight"
                /></NuxtLink>
              </template>
            </BaseKeyValueText>
          </BaseCard>
          <BaseFileInput
            v-else
            :id="`${id}-file-input-${index}`"
            :data-test-id="`${id}-file-input-${index}`"
            @handleSubmitFile="handleSubmitFile"
          >
            <BaseCard is-base-card :data-test-id="`${id}-card-${index}`">
              <BaseKeyValueText
                :data-test-id="`${id}-text-${index}`"
                text-direction="row"
                :is-loading="pending"
              >
                <template #label>
                  <p>{{ item?.label || '' }}</p>
                </template>
                <template #value>
                  <BaseIcon :name="IconNames.ArrowRight" />
                </template>
              </BaseKeyValueText>
            </BaseCard>
          </BaseFileInput>
        </BaseSkeletonLoader>
      </div>
    </template>
    <div v-if="showUI === UITypes.UPLOAD" class="col">
      <BaseFileUploadProgressBar
        :progress="progress"
        :data-test-id="`${id}-progress`"
        @handleCancelSubmit="handleCancelSubmit"
      />
    </div>
    <BaseSkeletonLoader
      :is-loading="isLoadingFiles"
      :rows="[
        { col: 12, size: 'sm' },
        { col: 12, size: 'sm' },
        { col: 12, size: 'sm' },
      ]"
    >
      <div
        v-if="showUI === UITypes.DOCUMENTS"
        class="col theme-cta-proof-income-uploaded"
      >
        <h2 class="theme-cta-proof-income-uploaded-title">
          {{ LABELS.UPLOADED_DOCUMENTS }}
        </h2>
        <ul class="theme-cta-proof-income-uploaded-documents">
          <li
            v-for="document in documents"
            :key="document?.documentId"
            class="theme-cta-proof-income-uploaded-document"
            :data-test-id="`${id}-document-${document?.documentId}`"
          >
            {{ document?.fileName || '' }}
          </li>
        </ul>
        <button
          :data-test-id="`${id}-add-another-document`"
          class="btn btn-link"
          @click="showUI = UITypes.BUTTONS"
        >
          {{ LABELS.ADD_ANOTHER_DOCUMENT }}
        </button>
      </div>
    </BaseSkeletonLoader>
  </div>
  <div
    v-if="[UITypes.UPLOAD, UITypes.DOCUMENTS].includes(showUI)"
    class="theme-cta-proof-income-done"
  >
    <NuxtLink
      :data-test-id="`${id}-done`"
      :to="Routes.ReApplyLoanOriginationEligibleLoansSingleOfferPaydayLoan"
      class="theme-btn btn btn-lg btn-primary"
      :class="{ disabled: showUI === UITypes.UPLOAD || isLoadingFiles }"
    >
      <span>{{ LABELS.DONE }}</span>
    </NuxtLink>
  </div>
</template>
