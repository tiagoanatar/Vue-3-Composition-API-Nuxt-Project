<script setup lang="ts">
interface Props {
  active?: string;
  contentId: string;
  dataTestId: string;
  id: string;
  title: string;
}

const props = defineProps<Props>();

const activeTabClass = reactive({ value: '' });

watchEffect(() => {
  if (props.active === 'true') {
    activeTabClass.value = 'active';
  } else {
    activeTabClass.value = '';
  }
});

const emit = defineEmits(['click']);

function clickHandler() {
  emit('click', props.contentId);
}
</script>

<template>
  <li class="nav-item" role="presentation">
    <button
      :id="id"
      :aria-controls="id"
      :aria-selected="active"
      :class="`nav-link ${activeTabClass.value}`"
      :data-bs-target="`#${id}`"
      :data-testid="`${dataTestId}-tab-button`"
      data-bs-toggle="pill"
      role="tab"
      type="button"
      @click="clickHandler"
    >
      {{ title }}
    </button>
  </li>
</template>
