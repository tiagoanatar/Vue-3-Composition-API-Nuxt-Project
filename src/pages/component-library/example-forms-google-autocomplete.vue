<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'AA | Component Library - Google Map Widget Search',
});

const NEW_ZEALAND_BOUNDS = {
  north: -34.36,
  south: -47.35,
  west: 166.28,
  east: -175.81,
};

const addressComponents = ref([]);
const addressComponentTwo = ref([]);

const handlePlace = (data) => {
  console.log('ONE: ', data);
  addressComponents.value = data?.address_components || [];
};

const handlePlaceTwo = (data) => {
  console.log('TWO:', data);
  addressComponentTwo.value = data?.address_components || [];
};
</script>

<template>
  <div class="container">
    <h1>Google Map Widget Search [Spike]</h1>

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
        <p>
          <code>BaseInputAutoComplete</code> is a wrapper for the
          <code>GMapAutocomplete</code> component from the vue-google-maps
          library
        </p>
        <p class="fs-5">Libraries:</p>
        <p>
          <a href="https://vue-map.netlify.app/">@fawmi/vue-google-maps</a>
        </p>
        <p class="fs-5">Additional Notes:</p>
        <p>Existing input styles are reused.</p>
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
              <td>id (required)</td>
              <td>Main id of the component</td>
            </tr>
            <tr>
              <td>name (required)</td>
              <td>Input name</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>Input default text</td>
            </tr>
            <tr>
              <td>hint</td>
              <td>hint Display hint text</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label text</td>
            </tr>
            <tr>
              <td>options</td>
              <td>
                Additional options for the
                <code>GMapAutocomplete</code> component.<br />eg: set bounds
              </td>
            </tr>
            <tr>
              <td>@handle-place</td>
              <td>Event that returns the user's selection</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Component Sample</h2>
        <hr />
      </div>
    </div>
    <div class="mb-5">
      <p class="fs-5">Base:</p>
      <BaseInputAutoComplete
        id="autoComplete"
        data-test-id="example-0"
        name="autoComplete"
        @handle-place="handlePlace"
      />
      <code v-if="addressComponents.length !== 0" class="address-components">
        <ul>
          <li v-for="(address, key) in addressComponents" :key="key">
            {{ address.types }} : {{ address.long_name }}
          </li>
        </ul>
      </code>
    </div>
    <div class="mb-5">
      <p class="fs-5">With Options:</p>
      <BaseInputAutoComplete
        id="autoCompleteTwo"
        :options="{ bounds: NEW_ZEALAND_BOUNDS, strictBounds: true }"
        data-test-id="example-1"
        hint="Only New Zealand addresses are shown"
        label="New Zealand addresses"
        name="autoCompleteTwo"
        @handle-place="handlePlaceTwo"
      />
      <code v-if="addressComponentTwo.length !== 0" class="address-components">
        <ul>
          <li v-for="(address, key) in addressComponentTwo" :key="key">
            {{ address.types }} : {{ address.long_name }}
          </li>
        </ul>
      </code>
    </div>
  </div>
</template>

<!-- NOTE: Scoped styles are being used given that this component-library could be disposed in the future. -->
<style scoped lang="scss">
.address-components {
  display: block;
  margin: 1rem 0;
}
</style>
