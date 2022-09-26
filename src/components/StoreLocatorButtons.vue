<script setup lang="ts">
import { Pages } from '@/constants/pages';
import { getCurrentLocation } from '@/utils/map';

const emit = defineEmits(['handleLocation', 'handleHide']);
const buttonListLabel = { show: 'Hide List', hide: 'Show List' };
const currentLabel = { base: 'Use Current Location', locating: 'Locating…' };

const currentLocation = ref({ isLoading: false, label: currentLabel.base });
const hideList = ref({ show: true, label: buttonListLabel.show });

const handleCurrentLocation = () => {
  currentLocation.value = {
    isLoading: true,
    label: currentLabel.locating,
  };

  getCurrentLocation((data) => {
    if (data?.error) {
      // TODO: Replace with a more user-friendly
      // error message (defined by the design team)
      alert(data.error);
    } else {
      emit('handleLocation', data);
    }

    currentLocation.value = {
      isLoading: false,
      label: currentLabel.base,
    };
  });
};

const handleHideList = () => {
  const show = !hideList.value.show;
  const label = buttonListLabel[show ? 'show' : 'hide'];
  hideList.value = { show, label };
  emit('handleHide', show);
};
</script>

<template>
  <div class="d-md-flex justify-content-between theme-store-locator-buttons">
    <button
      class="btn btn-link theme-store-locator-buttons-location"
      :aria-label="currentLocation.label"
      :disabled="currentLocation.isLoading"
      :data-testid="`${Pages.StoreLocator}-current-location`"
      @click="handleCurrentLocation"
    >
      {{ currentLocation.label }}
    </button>
    <button
      :aria-label="hideList.label"
      class="btn btn-link theme-store-locator-buttons-hide"
      :data-testid="`${Pages.StoreLocator}-hide-list`"
      @click="handleHideList"
    >
      {{ hideList.label }}
    </button>
  </div>
</template>
