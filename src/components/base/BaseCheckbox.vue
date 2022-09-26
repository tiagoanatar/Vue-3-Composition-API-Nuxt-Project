<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { useField } from 'vee-validate';

interface Props {
  dataTestId: string;
  id: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  effectValue?: boolean;
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
  effectValue: undefined,
  label: '',
});

const input = ref(null);
const { value, errorMessage, handleChange } = useField(props.name);

const reactiveValue = reactive({ value: false });

function toggleValue() {
  reactiveValue.value = input.value.checked;
  handleChange(reactiveValue.value);
}

watch(
  () => {
    props.effectValue;
  },
  () => {
    value.value = props.effectValue;
    input.value.checked = props.effectValue;
  },
  { deep: true }
);
</script>

<template>
  <BaseSkeletonLoader :is-loading="isLoading" :rows="[{ col: 5 }]">
    <div class="form-check theme-form-checkbox">
      <input
        :id="id"
        ref="input"
        class="form-check-input"
        type="checkbox"
        :value="reactiveValue.value"
        :name="name"
        :disabled="isDisabled"
        :aria-describedby="id"
        :data-testid="`${dataTestId}-checkbox-input`"
        @click="toggleValue"
      />
      <label
        class="form-check-label"
        :for="id"
        :data-testid="`${dataTestId}-checkbox-label`"
      >
        {{ label }}
      </label>
      <slot />
    </div>
    <div v-if="errorMessage" class="theme-validation">
      <p
        class="help-message invalid-feedback"
        :data-testid="`${dataTestId}-checkbox-error`"
      >
        <BaseIcon
          :color="Colors.AARed"
          :name="IconNames.AlertCircle"
          :size="IconSizes.Small"
        />
        {{ errorMessage }}
      </p>
    </div>
  </BaseSkeletonLoader>
</template>
