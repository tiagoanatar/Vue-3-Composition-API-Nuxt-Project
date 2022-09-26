<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { ref } from 'vue';

useHead({
  title: 'AA | Component Library - Google Maps',
});

const MAP_TYPES = ['Roadmap', 'Satellite', 'Hybrid', 'Terrain'];
const mapType = ref('terrain');
const addressComponents = ref([]);
const center = ref({ lat: 40.7127753, lng: -74.0059728 }); // NY
const markers = ref([
  { position: { lat: -31.56391, lng: 147.154312 } },
  { position: { lat: -33.718234, lng: 150.363181 } },
  { position: { lat: -33.727111, lng: 150.371124 } },
  { position: { lat: -33.848588, lng: 151.209834 } },
  { position: { lat: -33.851702, lng: 151.216968 } },
  { position: { lat: -34.671264, lng: 150.863657 } },
  { position: { lat: -35.304724, lng: 148.662905 } },
  { position: { lat: -36.817685, lng: 175.699196 } },
  { position: { lat: -36.828611, lng: 175.790222 } },
  { position: { lat: -37.75, lng: 145.116667 } },
  { position: { lat: -37.759859, lng: 145.128708 } },
  { position: { lat: -37.765015, lng: 145.133858 } },
  { position: { lat: -37.770104, lng: 145.143299 } },
  { position: { lat: -37.7737, lng: 145.145187 } },
  { position: { lat: -37.774785, lng: 145.137978 } },
  { position: { lat: -37.819616, lng: 144.968119 } },
  { position: { lat: -38.330766, lng: 144.695692 } },
  { position: { lat: -39.927193, lng: 175.053218 } },
  { position: { lat: -41.330162, lng: 174.865694 } },
  { position: { lat: -42.734358, lng: 147.439506 } },
  { position: { lat: -42.734358, lng: 147.501315 } },
  { position: { lat: -42.735258, lng: 147.438 } },
  { position: { lat: -43.999792, lng: 170.463352 } },
]);

const circleOptions = ref({
  strokeColor: Colors.AALightBlue,
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: 'rgba(39, 170, 225, 0.3)',
  fillOpacity: 1,
});

const germanCities = ref([
  {
    id: 'duesseldorf',
    population: 612178,
    position: {
      lat: 51.233334,
      lng: 6.783333,
    },
  },
  {
    id: 'koeln',
    position: {
      lat: 50.935173,
      lng: 6.953101,
    },
    population: 1087863,
  },
  {
    id: 'Hamburg',
    position: {
      lat: 53.551086,
      lng: 9.993682,
    },
    population: 1899160,
  },
]);

const handlePlace = (data) => {
  console.log(data);
  addressComponents.value = data?.address_components || [];

  center.value = {
    lat: data?.geometry?.location?.lat(),
    lng: data?.geometry?.location?.lng(),
  };
};
</script>

<template>
  <div class="container">
    <h1>Google Maps</h1>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p class="fs-5">Description:</p>
        <p>Component that allows rendering Google maps</p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=18300%3A194375"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>
          <a href="https://vue-map.netlify.app/">@fawmi/vue-google-maps</a>
        </p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>center</td>
              <td>Coordinates to set the center of the map</td>
            </tr>
            <tr>
              <td>zoom</td>
              <td>Initial map zoom value</td>
            </tr>
            <tr>
              <td>map-type-id</td>
              <td>Roadmap, Satellite, Hybrid, Terrain</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>
    <ClientOnly>
      <div class="mb-5">
        <p class="fs-5">Autocomplete:</p>
        <GMapAutocomplete
          placeholder="This is a placeholder"
          class="form-control"
          @place_changed="handlePlace"
        />
        <code class="address-components">
          <ul v-if="addressComponents.length !== 0">
            <li v-for="(address, key) in addressComponents" :key="key">
              {{ address.types }} : {{ address.long_name }}
            </li>
          </ul>
        </code>
        <p class="mt-5 fs-5">Maps</p>
        <div class="maps-group">
          <GMapMap :center="center" :zoom="7" :map-type-id="mapType">
            <GMapMarker :position="center" />
          </GMapMap>
        </div>
        <div class="btns-group">
          <BaseButton
            v-for="(type, key) in MAP_TYPES"
            :key="key"
            :label="type"
            :variation="
              mapType === type.toLowerCase() ? 'secondary' : 'primary'
            "
            @click="mapType = type.toLowerCase()"
          />
        </div>
        <p class="mt-5 fs-5">Circle</p>
        <div class="maps-group">
          <GMapMap
            :center="{ lat: 51.093048, lng: 6.84212 }"
            :zoom="6"
            :map-type-id="mapType"
          >
            <GMapCircle
              v-for="city in germanCities"
              :key="city.id"
              :options="circleOptions"
              :radius="Math.sqrt(city.population) * 100"
              :center="{ lat: city.position.lat, lng: city.position.lng }"
            />
          </GMapMap>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<!-- NOTE: Scoped styles are being used given that this component-library could be disposed in the future. -->
<style scoped lang="scss">
.maps-group {
  height: 500px;
  width: 100%;
}

.btns-group {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 3rem;
}

.address-components {
  display: block;
  margin: 1rem 0;
}
</style>
