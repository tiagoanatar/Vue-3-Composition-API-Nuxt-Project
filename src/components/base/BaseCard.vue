<script setup lang="ts">
interface Props {
  isBaseCard?: boolean;
  dataTestId: string;
}

withDefaults(defineProps<Props>(), {
  isBaseCard: false,
});
</script>

<template>
  <div class="card">
    <div
      v-if="!isBaseCard"
      class="card-header"
      :data-testid="`${dataTestId}-card-header`"
    >
      <slot name="header">Default header</slot>
    </div>
    <div class="card-body" :data-testid="`${dataTestId}-card-body`">
      <div v-if="!isBaseCard" class="card-title">
        <slot name="title">
          <h1>Default body title</h1>
        </slot>
      </div>

      <div
        v-if="!isBaseCard"
        class="card-text"
        :data-testid="`${dataTestId}-card-content`"
      >
        <slot name="text">Default body text</slot>
      </div>

      <slot name="default">
        <!-- NOTE: no default content in the default body slot as it may need to be empty in some instances -->
      </slot>
    </div>
    <div
      v-if="!isBaseCard"
      class="card-footer"
      :data-testid="`${dataTestId}-card-footer`"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
