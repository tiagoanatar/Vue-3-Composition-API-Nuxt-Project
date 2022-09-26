<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';

interface SelectItem {
  label: string;
  value: string;
}

interface Props {
  dataTestId: string;
  hint?: string;
  id: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  items: SelectItem[];
  label?: string;
  name: string;
  optionalText?: string;
  effectValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  hint: '',
  isDisabled: false,
  isMultiple: false,
  label: '',
  optionalText: '',
  effectValue: '',
});

const input = ref(null);
const { value, errorMessage, handleBlur, handleChange } = useField(props.name);

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
          :data-testid="`${dataTestId}-select-input-label`"
        >
          {{ label }}
        </label>
        <p
          v-if="optionalText"
          :id="id"
          class="form-text"
          :data-testid="`${dataTestId}-select-input-optional-text`"
        >
          {{ optionalText }}
        </p>
      </div>
      <label
        v-else
        :for="id"
        class="form-label"
        :data-testid="`${dataTestId}-select-input-label`"
      >
        {{ label }}
      </label>
    </BaseSkeletonLoader>
    <select
      :id="id"
      ref="input"
      :class="[
        { 'not-valid': errorMessage, 'is-active': isActive },
        'form-select',
      ]"
      :name="name"
      :aria-label="label"
      :aria-describedby="id"
      :data-testid="`${dataTestId}-select-input`"
      :multiple="isMultiple"
      :disabled="isDisabled"
      required
      @input="handleChange"
      @blur="handleBlur"
    >
      <option v-for="item in props.items" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <p
      v-if="hint"
      :id="id"
      class="form-text"
      :data-testid="`${dataTestId}-select-input-hint`"
    >
      {{ hint }}
    </p>
    <div v-if="errorMessage" class="theme-validation">
      <p
        class="help-message invalid-feedback"
        :data-testid="`${dataTestId}-select-input-error`"
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
