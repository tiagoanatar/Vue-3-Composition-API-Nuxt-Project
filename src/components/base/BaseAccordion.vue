<script setup lang="ts">
interface AccordionItem {
  heading: string;
  id: string;
  isOpen?: boolean;
}

interface Props {
  dataTestId: string;
  id: string;
  items: AccordionItem[];
}

const cxButton = computed(() => (isOpen) => [
  'accordion-button',
  !isOpen && 'collapsed',
]);

const cxBody = computed(() => (isOpen) => [
  'accordion-collapse collapse',
  isOpen && 'show',
]);

const props = withDefaults(defineProps<Props>(), {});
</script>
<!-- TODO: Style accordion open / closed chevron and remove focus underline -->
<template>
  <div
    :id="props.id"
    class="accordion"
    :data-testid="`${dataTestId}-accordion`"
  >
    <div v-for="item in props.items" :key="item.id" class="accordion-item">
      <p :id="`heading-${item.id}`" class="accordion-header">
        <button
          :class="cxButton(item.isOpen)"
          :data-bs-target="`#body-${item.id}`"
          :aria-expanded="item.isOpen ? 'true' : 'false'"
          :aria-controls="`body-${item.id}`"
          :data-testid="`${dataTestId}-${item.id}-accordion-collapse-button`"
          data-bs-toggle="collapse"
        >
          {{ item.heading }}
        </button>
      </p>
      <div
        :id="`body-${item.id}`"
        :class="cxBody(item.isOpen)"
        :aria-labelledby="`heading-${item.id}`"
        :data-bs-parent="props.id && `#${props.id}`"
      >
        <div
          class="accordion-body"
          :data-testid="`${dataTestId}-${item.id}-accordion-content`"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
