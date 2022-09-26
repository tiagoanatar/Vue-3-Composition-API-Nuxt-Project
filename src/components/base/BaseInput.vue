<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';

interface Props {
  autoComplete?: string;
  dataTestId: string;
  getError?: boolean;
  hint?: string;
  id: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  label?: string;
  mask?: string | string[];
  maxLength?: string;
  name: string;
  optionalText?: string;
  //TODO: This will be used once the icon component is being used.
  // iconAlignLeft: boolean;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text';
  effectValue?: string; // Value set on parent (side effect)
}

const props = withDefaults(defineProps<Props>(), {
  effectValue: undefined,
  getError: false,
  hint: '',
  label: '',
  mask: '',
  maxLength: '500', // High number to consider most of the cases
  optionalText: '',
  type: 'text',
  showWarningText: false,
  autoComplete: 'off',
});

const emit = defineEmits(['focus', 'blur']);

const { value, meta, errorMessage, handleBlur, handleChange } = useField(
  props.name
);
const isPassword = reactive({ value: true, blockIcon: true });
const togglePassword = () => {
  isPassword.value = !isPassword.value;
  isPassword.blockIcon = false;
};

const input = ref(null);
// Allows to not defined the mask prop
const noMask = { mask: '*'.repeat(255), tokens: { '*': { pattern: /./ } } };

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

const { setInputValidState } = useInputValidState();

const inputType = isPassword.value ? 'text' : props.type;

const focusHandler = () => {
  emit?.('focus');
};
const blurHandler = () => {
  emit?.('blur');
  handleBlur();
};
</script>
<template>
  <!-- TODO: styling for input group and input border -->
  <div class="theme-input-wrapper">
    <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 3 }]">
      <div v-if="optionalText" class="theme-input-label-wrapper">
        <label
          :data-testid="`${dataTestId}-${inputType}-input-label`"
          :for="id"
          class="form-label"
        >
          {{ label }}
        </label>
        <p
          v-if="optionalText"
          :data-testid="`${dataTestId}-${inputType}-input-optional-text`"
          class="form-text"
        >
          {{ optionalText }}
        </p>
      </div>
      <label
        v-else
        :data-testid="`${dataTestId}-${inputType}-input-label`"
        :for="id"
        class="form-label"
      >
        {{ label }}
      </label>
      <slot name="icon"></slot>
    </BaseSkeletonLoader>
    <div class="theme-input-icon-wrapper">
      <div
        v-if="type === 'password'"
        :data-testid="`${dataTestId}-password-input-toggle`"
        class="theme-input-icon"
        @click="togglePassword"
        @keypress="togglePassword"
      >
        <BaseIcon
          v-if="isPassword.value"
          :color="Colors.Black"
          :name="IconNames.EyeOff"
          :size="IconSizes.Medium"
        />
        <BaseIcon
          v-else
          :color="Colors.Black"
          :name="IconNames.Eye"
          :size="IconSizes.Medium"
        />
      </div>
      <div v-else class="theme-input-icon">
        <BaseIcon
          v-if="type === 'search' || (!errorMessage && value)"
          :color="Colors.Black"
          :name="IconNames[type === 'search' ? 'Search' : 'Check']"
          :size="IconSizes.Medium"
        />
      </div>
      <!-- Adding rule since label will exist after content has loaded -->
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        :id="id"
        ref="input"
        v-mask="mask || noMask"
        :class="[
          {
            'is-active': isActive,
            'not-valid': errorMessage,
          },
          'is-password',
          'form-control',
        ]"
        :aria-describedby="id"
        :aria-invalid="!!errorMessage"
        :data-testid="`${dataTestId}-${inputType}-input`"
        :disabled="isDisabled"
        :masked="!!mask"
        :maxlength="maxLength"
        :name="name"
        :readonly="isReadOnly"
        :type="type === 'password' && isPassword.value ? type : 'text'"
        :autocomplete="autoComplete"
        required
        @blur="blurHandler"
        @input="handleChange"
        @focus="focusHandler"
      />
    </div>
    <p
      v-if="hint"
      class="form-text"
      :data-testid="`${dataTestId}-${inputType}-input-hint`"
    >
      {{ hint }}
    </p>
    <div v-if="errorMessage" class="theme-validation">
      <p
        class="help-message invalid-feedback"
        :data-testid="`${dataTestId}-${inputType}-input-error`"
      >
        <BaseIcon
          :color="Colors.AARed"
          :name="IconNames.AlertCircle"
          :size="IconSizes.Small"
        />
        {{ errorMessage }}
      </p>
    </div>
    {{ getError ? setInputValidState(meta.valid) : null }}
  </div>
</template>
