<script setup lang="ts">
import { Pages } from '@/constants/pages';
import { getStores } from '@/utils/stores';
import { geocodingAddress } from '@/utils/map';

const { getPersonalInfo } = useComposite();

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Store Locator',
});

definePageMeta({
  layout: 'store-locator',
  middleware: 'auth',
});

// Default coordinates in New york
const coordinates = ref({
  lat: 40.7127753,
  lng: -74.0059728,
});

const isLoading = ref(false);
const showStores = ref(true);
const storeList = ref([]);
const cityName = ref('');
const center = ref(null);
const noFound = ref(null);

// NOTE: This is a temporary value that is not rendered,
// it is saved to be able to show the city name label
// once the service indicates that there are no stores nearby.
let temporalCityName = '';

const handleLocation = (data) => {
  coordinates.value = {
    lat: data?.latitude,
    lng: data?.longitude,
  };

  temporalCityName = 'your current location';
};

const handleHide = (show) => {
  showStores.value = show;
};

const handlePlace = (data) => {
  if (Object.keys(data).length !== 0 && data?.formatted_address) {
    const lat = data?.geometry?.location?.lat();
    const lng = data?.geometry?.location?.lng();
    coordinates.value = { lat, lng };
    temporalCityName = data?.formatted_address;
  }
};

/**
 * When the component is mounted the current user
 * information is obtained and the address is extracted
 */
onMounted(async () => {
  const data = await getPersonalInfo();
  const address = data?.homeAddress?.address1 ? data?.address : '';
  isLoading.value = true;

  if (address) {
    // TODO: Remove once we have the current coordinates of the user's address,
    // to avoid the use of the Google maps geocoding function
    const geocodingStore = await geocodingAddress(address);
    const currentCoordinates =
      geocodingStore?.results?.[0]?.geometry?.location || coordinates.value;
    coordinates.value = currentCoordinates;
  }

  cityName.value = !address ? 'your current location' : '';
  isLoading.value = false;
});

/**
 * Effect that is executed when the coordinates have changed
 */
watch(
  () => {
    coordinates.value;
  },
  async () => {
    isLoading.value = true;

    try {
      const stores = await getStores(
        coordinates.value.lat,
        coordinates.value.lng
      );

      // Depending on the stores, the center to be shown on the map is calculated
      // (by default, the first store is taken if it exists and if it has coordinates)
      const newCenter = stores?.filter(
        (store) => Object.keys(store?.coordinate || {}).length !== 0
      )?.[0]?.coordinate;

      center.value = newCenter || coordinates.value;
      storeList.value = stores;

      noFound.value =
        stores.length === 0
          ? {
              lat: coordinates.value.lat,
              lng: coordinates.value.lng,
            }
          : null;
      cityName.value = stores.length === 0 ? temporalCityName : '';
    } catch (e) {
      // TODO: Check error handling.
      console.error(e);
    }

    isLoading.value = false;
  },
  { deep: true }
);
</script>

<template>
  <ClientOnly>
    <main class="container theme-store-locator-container">
      <div class="row theme-store-locator-row">
        <div class="col-md-5 theme-store-locator-left">
          <StoreLocatorHeader />
          <StoreLocatorButtons
            @handle-location="handleLocation"
            @handle-hide="handleHide"
          />
          <BaseInputAutoComplete
            id="address"
            :data-test-id="Pages.StoreLocator"
            name="address"
            :is-disabled="isLoading"
            @handle-place="handlePlace"
          />
          <hr class="solid" />
          <StoreLocatorStores
            v-if="showStores"
            :city-name="cityName"
            :is-loading="isLoading"
            :store-list="storeList"
          />
        </div>
        <div class="col-md-7 theme-store-locator-right">
          <StoreLocatorMap
            :center="center || coordinates"
            :is-loading="isLoading"
            :no-found="noFound"
            :store-list="storeList"
          />
        </div>
      </div>
    </main>
  </ClientOnly>
</template>
