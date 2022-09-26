<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';

// TODO: create data-automation id
interface Props {
  checkedValue?: string;
  dataTestId: string;
  id: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isValidateDisabled?: boolean;
  label?: string;
  name: string;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  checkedValue: '',
  isDisabled: false,
  isValidateDisabled: true,
  label: '',
  value: '',
});

const emit = defineEmits(['click']);

const isChecked = reactive({ value: false });

const { errorMessage, handleChange } = useField(props.name);

watchEffect(() => {
  if (props.checkedValue === props.value) {
    isChecked.value = true;
    handleChange(props.value);
  } else {
    isChecked.value = false;
  }
});

const cxRadio = computed(() => [
  'form-check',
  'pf-radio',
  isChecked.value && 'pf-checked',
]);

function clickHandler() {
  emit('click', props.value);
  handleChange(props.value);
}
</script>
<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <div :class="cxRadio" @click="clickHandler">
    <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 3 }]">
      <input
        :id="id"
        class="form-check-input"
        type="radio"
        :name="name"
        :value="value"
        :disabled="isDisabled"
        :checked="isChecked.value"
        :data-testid="`${dataTestId}-radio-input`"
      />
      <label
        class="form-check-label"
        :for="id"
        :data-testid="`${dataTestId}-radio-label`"
      >
        {{ label }}
      </label>
    </BaseSkeletonLoader>
  </div>
  <div v-if="errorMessage && isValidateDisabled" class="theme-validation">
    <p
      class="help-message invalid-feedback"
      :data-testid="`${dataTestId}-radio-error`"
    >
      <BaseIcon
        :color="Colors.AARed"
        :name="IconNames.AlertCircle"
        :size="IconSizes.Small"
      />
      {{ errorMessage }}
    </p>
  </div>
</template>
