<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';

interface Props {
  dataTestId: string;
  hint?: string;
  id: string;
  isActive?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  max?: string;
  min?: string;
  name: string;
  optionalText?: string;
  effectValue?: string; // Value set on parent (side effect)
}

const props = withDefaults(defineProps<Props>(), {
  hint: '',
  isDisabled: false,
  isRequired: false,
  label: '',
  max: '9999-12-31',
  min: '',
  optionalText: '',
  effectValue: undefined,
});

const { value, errorMessage, handleBlur, handleChange } = useField(props.name);
const input = ref(null);

watch(
  () => {
    props.effectValue;
  },
  () => {
    // Updates field value in useField and DOM
    value.value = props.effectValue;
    input.value.value = props.effectValue;
  },
  { deep: true }
);
</script>
<template>
  <!-- TODO: styling for input group and input border -->
  <div class="theme-input-wrapper">
    <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 3 }]">
      <div v-if="optionalText" class="theme-input-label-wrapper">
        <label
          :for="id"
          class="form-label"
          :data-testid="`${dataTestId}-date-label`"
          >{{ label }}</label
        >
        <p
          v-if="optionalText"
          :id="id"
          class="form-text"
          :data-testid="`${dataTestId}-date-optional-text`"
        >
          {{ optionalText }}
        </p>
      </div>
      <label
        v-else
        :for="id"
        class="form-label"
        :data-testid="`${dataTestId}-date-label`"
        >{{ label }}</label
      >
    </BaseSkeletonLoader>
    <!-- Adding rule since label will exist after content has loaded -->
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input
      :id="id"
      ref="input"
      type="date"
      :data-testid="`${dataTestId}-date-input`"
      :name="name"
      :class="[
        { 'not-valid': errorMessage, 'is-active': isActive },
        isReadOnly ? 'form-control-plaintext' : 'form-control',
      ]"
      :readonly="isReadOnly"
      :aria-describedby="id"
      :min="min"
      :max="max"
      :disabled="isDisabled"
      :required="isRequired"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p
      v-if="hint"
      :id="id"
      class="form-text"
      :data-testid="`${dataTestId}-date-hint`"
    >
      {{ hint }}
    </p>
    <div v-if="errorMessage" class="theme-validation">
      <p
        class="help-message invalid-feedback"
        :data-testid="`${dataTestId}-date-error`"
      >
        <BaseIcon
          :color="Colors.AARed"
          :name="IconNames.AlertCircle"
          :size="IconSizes.Small"
        />
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>
