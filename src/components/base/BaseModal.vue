<script setup lang="ts">
interface Props {
  background?: 'blue' | 'blue-image' | 'transparent' | 'white';
  closeModal?: boolean;
  dataTestId: string;
  id: string;
  position?: 'center' | 'bottom';
  showMe?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  position: 'center',
  showMe: false,
  closeModal: true,
});

const { $bsModal } = useNuxtApp();
const slots = useSlots();
const modalRef = ref(null);
const isCentered = props.position === 'center';
const modal = ref(null);
const emit = defineEmits(['handleHide']);
const cxFooter = computed(() => [
  'modal-footer',
  { 'justify-content-center': props.background === 'blue-image' },
]);

/**
 * Function that listens when a modal has closed, also emits the state to the parent component
 */
const hiddenModal = () => {
  if (props.closeModal) {
    emit('handleHide');
  }
};

onMounted(() => {
  if (modalRef.value) {
    modal.value = new $bsModal(modalRef.value);
    if (props.showMe) {
      modal.value.show(props.id);
    }
    modalRef.value.addEventListener('hidden.bs.modal', hiddenModal);
  }
});

onUnmounted(() => {
  if (modalRef.value) {
    modalRef.value.removeEventListener('hidden.bs.modal', hiddenModal);
  }
  if (modal?.value?._isShown && props?.id) {
    modal.value.hide(props.id);
  }
});

/**
 * Listen if the showMe prop changes
 */
watch(
  () => props.showMe,
  (showMe) => {
    if (modal?.value) {
      if (showMe) {
        modal.value.show(props.id);
      } else {
        // It was necessary to add this validation because if the modal was in the animation state, it would not close
        modal.value._isTransitioning = false;
        modal.value.hide(props.id);
      }
    }
  }
);
</script>

<template>
  <teleport to="body">
    <div
      v-if="isCentered"
      :id="id"
      ref="modalRef"
      class="modal fade theme-modal"
      :data-bs-backdrop="!closeModal ? 'static' : 'true'"
      :data-bs-keyboard="closeModal"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div :class="['modal-content', props.background]">
          <div class="modal-header">
            <!-- TODO: Add the close icon -->
            <button
              v-if="props.background !== 'transparent' && closeModal"
              data-bs-dismiss="modal"
              type="button"
              class="btn-close text-reset"
              aria-label="Close"
              :data-testid="`${dataTestId}-close-modal`"
            />
          </div>

          <div class="modal-body" :data-testid="`${dataTestId}-modal-content`">
            <slot />
          </div>

          <div
            v-if="slots.footer"
            :class="cxFooter"
            :data-testid="`${dataTestId}-modal-footer`"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      :id="id"
      :class="['offcanvas offcanvas-bottom theme-modal', props.background]"
      aria-hidden="true"
      tabindex="-1"
    >
      <div class="offcanvas-header">
        <!-- TODO: Add the close icon -->
        <button
          data-bs-dismiss="offcanvas"
          type="button"
          class="btn-close text-reset"
          aria-label="Close"
          :data-testid="`${dataTestId}-close-modal`"
        ></button>
      </div>

      <div class="offcanvas-body" :data-testid="`${dataTestId}-modal-content`">
        <slot />
      </div>

      <div
        v-if="slots.footer"
        class="offcanvas-footer"
        :data-testid="`${dataTestId}-modal-footer`"
      >
        <slot name="footer" />
      </div>
    </div>
  </teleport>
</template>
