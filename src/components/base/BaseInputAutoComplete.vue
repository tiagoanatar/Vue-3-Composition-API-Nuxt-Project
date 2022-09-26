<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';
interface Props {
  dataTestId: string;
  hint?: string;
  id: string;
  isDisabled?: boolean;
  label?: string;
  name: string;
  optionalText?: string;
  options?;
  placeholder?: string;
  effectValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  hint: '',
  isDisabled: false,
  label: '',
  optionalText: '',
  options: {
    componentRestrictions: { country: 'us' },
    strictBounds: true,
    types: ['address'],
  },
  placeholder: '',
  effectValue: undefined,
});

const emit = defineEmits(['handlePlace']);
const input = ref(null);

const { value, errorMessage, handleBlur, handleChange } = useField(props.name);

const handlePlace = (data = {}) => emit('handlePlace', data);

const handleKey = (e) => {
  // Validation to restart the address that the user had entered,
  // the enter, TAB and escape are excluded
  if (![9, 13, 27].includes(e.keyCode)) {
    emit('handlePlace', {});
  }
};

watch(
  () => {
    props.effectValue;
  },
  () => {
    // Updates field value in useField and DOM
    value.value = props.effectValue;
    input.value.$el.value = props.effectValue;
  },
  { deep: true }
);
</script>
<template>
  <div class="theme-input-wrapper">
    <div v-if="optionalText" class="theme-input-label-wrapper">
      <label
        :for="id"
        class="form-label"
        :data-testid="`${dataTestId}-autocomplete-input-label`"
      >
        {{ label }}
      </label>
      <p
        v-if="optionalText"
        class="form-text"
        :data-testid="`${dataTestId}-autocomplete-input-optional-text`"
      >
        {{ optionalText }}
      </p>
    </div>
    <label
      v-else-if="label"
      :for="id"
      class="form-label"
      :data-testid="`${dataTestId}-autocomplete-input-label`"
    >
      {{ label }}
    </label>
    <div class="theme-input-icon-wrapper">
      <div class="theme-input-icon">
        <BaseIcon :name="IconNames.Search" :size="IconSizes.Medium" />
      </div>
      <GMapAutocomplete
        :id="id"
        ref="input"
        :class="[{ 'not-valid': errorMessage }]"
        :data-testid="`${dataTestId}-autocomplete-input`"
        :name="name"
        :options="options"
        :placeholder="placeholder"
        :disabled="isDisabled"
        class="is-password form-control"
        @keydown="handleKey"
        @blur="handleBlur"
        @input="handleChange"
        @place_changed="handlePlace"
      />
    </div>
    <p
      v-if="hint"
      class="form-text"
      :data-testid="`${dataTestId}-autocomplete-input-hint`"
    >
      {{ hint }}
    </p>
    <div v-if="errorMessage" class="theme-validation">
      <p class="help-message invalid-feedback">
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
