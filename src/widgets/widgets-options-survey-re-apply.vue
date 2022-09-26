<script setup lang="ts">
import { TPlaceHolder } from '@/constants/bootstrap';
import { useSurveyOptions } from '@/composables/schemas/useSchemas';

const { getFormData } = useContentful();
const { data, pending } = getFormData('widget-form-loan-need');
const { getFormValidState } = useFormValidState();
const schema = useSurveyOptions();

const surveyOption = reactive({
  value: '',
});

const clickSurveyOption = (value: string) => {
  surveyOption.value = value;
};

// TODO: Backend API integration and redirection
const handleSubmit = (data) => {
  console.log('survey options', data);
};

const btnPlaceHolder: TPlaceHolder[] = [{ col: 12, size: 'lg' }];

const id = 'formSurveyOptions';
const testIdBtn = 'survey-btn';
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    hide-submit
  >
    <div class="theme-re-apply-survey-options">
      <BaseRadioButton
        id="surveyOption-0"
        :checked-value="surveyOption.value"
        :data-test-id="`${id}-survey-option-0`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="data?.radioOptions[0].fields.label"
        :value="data?.radioOptions[0].fields.value"
        name="surveyOption"
        @click="clickSurveyOption"
      />
      <BaseRadioButton
        id="surveyOption-1"
        :checked-value="surveyOption.value"
        :data-test-id="`${id}-survey-option-1`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="data?.radioOptions[1].fields.label"
        :value="data?.radioOptions[1].fields.value"
        name="surveyOption"
        @click="clickSurveyOption"
      />
      <BaseRadioButton
        id="surveyOption-2"
        :checked-value="surveyOption.value"
        :data-test-id="`${id}-survey-option-2`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="data?.radioOptions[2].fields.label"
        :value="data?.radioOptions[2].fields.value"
        name="surveyOption"
        @click="clickSurveyOption"
      />
      <BaseRadioButton
        id="surveyOption-3"
        :checked-value="surveyOption.value"
        :data-test-id="`${id}-survey-option-3`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="data?.radioOptions[3].fields.label"
        :value="data?.radioOptions[3].fields.value"
        name="surveyOption"
        @click="clickSurveyOption"
      />
      <BaseRadioButton
        id="surveyOption-4"
        :checked-value="surveyOption.value"
        :data-test-id="`${id}-survey-option-4`"
        :is-loading="pending"
        :is-validate-disabled="false"
        :label="data?.radioOptions[4].fields.label"
        :value="data?.radioOptions[4].fields.value"
        name="surveyOption"
        @click="clickSurveyOption"
      />
      <div class="theme-re-apply-survey-options-button">
        <BaseSkeletonLoader :is-loading="pending" :rows="btnPlaceHolder">
          <BaseButton
            :form="id"
            :is-disabled="!getFormValidState"
            :label="data?.cta"
            :data-test-id="testIdBtn"
            type="submit"
          />
        </BaseSkeletonLoader>
      </div>
    </div>
  </BaseForm>
</template>
