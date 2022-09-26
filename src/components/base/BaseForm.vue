<script setup lang="ts">
import { AnyObject } from 'yup/lib/types';
import { Form } from 'vee-validate';

interface Props {
  buttonLabel?: string;
  dataTestId: string;
  hideSubmit?: boolean;
  id?: string;
  isLoading?: boolean;
  schema: AnyObject;
  submit: (values: AnyObject) => void;
  submitAlignment?: 'start' | 'center' | 'end';
  variation?: 'primary' | 'secondary' | 'outline-primary' | 'minimal';
}

const props = withDefaults(defineProps<Props>(), {
  buttonLabel: 'Submit',
  hideSubmit: false,
  id: 'base-form',
  isLoading: false,
  submitAlignment: 'end',
  variation: 'primary',
});

const cxFooter = computed(() => [
  'theme-form-footer d-flex',
  { 'justify-content-start': props.submitAlignment === 'start' },
  { 'justify-content-center': props.submitAlignment === 'center' },
  { 'justify-content-end': props.submitAlignment === 'end' },
]);

const { setFormValidState } = useFormValidState();
</script>

<template>
  <!--
    All form elements must be enclosed in this Form (vee-validate)
    component <BaseButton label="Submit" />
  -->
  <Form
    :id="id"
    v-slot="{ meta }"
    :data-testid="`${dataTestId}-form`"
    :validation-schema="schema"
    class="theme-form"
    @submit="submit"
  >
    <!-- TODO: remove client only and prevent warning on console -->
    <ClientOnly>
      <!-- Serves as an outlet for the Form's `valid` state (set by vee-validate).
    Form provides the `valid` state and this method exposes the value through
    `useFormValidState` composable -->
      <template v-if="hideSubmit">
        {{ setFormValidState(meta.valid) }}
      </template>
    </ClientOnly>
    <slot></slot>
    <div v-if="!hideSubmit" :class="cxFooter">
      <BaseButton
        :data-test-id="`${dataTestId}-form-submit`"
        :is-disabled="!meta.valid || isLoading"
        :label="buttonLabel"
        :variation="variation"
        :is-loading="isLoading"
        type="submit"
      />
    </div>
  </Form>
</template>
