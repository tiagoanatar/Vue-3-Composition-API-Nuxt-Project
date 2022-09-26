<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// eslint-disable-next-line sort-imports
import '@splidejs/splide/dist/css/splide.min.css';

useHead({
  title: 'AA | Component Library - Splide Slider - [SPIKE]',
});

// Examples of the slide events handling.
const handleCardClick = (splide) => {
  console.log('On card click event: ', splide.index);
};

const onMounted = (splide) => {
  console.log('onMounted event: ', splide);
  console.log('Slides length: ', splide.length);
};

const onMove = (splide) => {
  console.log('onMove current slide: ', splide.index);
};

const defaultVerticalSplideOptions = {
  direction: 'ttb',
  height: '30rem',
  wheel: true,
  perPage: 2,
  gap: '0',
};

const horizontalSplideOptions = {
  height: '27rem',
  wheel: true,
  perPage: 4,
  perMove: 1,
};
</script>

<template>
  <div class="container">
    <h1>Splide Slider - [SPIKE]</h1>

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
          <code>Splide</code> component library responsible for horizontal and
          vertical slide.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-S1---8?node-id=4230%3A64228"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>Please run: <code>npm i</code> to install splide</p>

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
              <td>options</td>
              <td>Will define its horizontal or vertical orientation</td>
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

    <div class="mb-5">
      <p class="fs-5">Default empty component (no props):</p>
      <Splide>
        <SplideSlide v-for="index in 10" :key="index">
          <ThirdPartySliderCard />
        </SplideSlide>
      </Splide>

      <p class="mt-5 fs-5">
        Vertical view (:options="defaultVerticalSplideOptions",
        @splide:mounted="onMounted", @splide:move="onMove",
        @splide:click="handleCardClick"):
      </p>
      <Splide
        :options="defaultVerticalSplideOptions"
        @splide:mounted="onMounted"
        @splide:move="onMove"
        @splide:click="handleCardClick"
      >
        <SplideSlide v-for="index in 10" :key="index">
          <ThirdPartySliderCard />
        </SplideSlide>
      </Splide>

      <p class="mt-5 fs-5">
        Horizontal view (:options="horizontalSplideOptions"):
      </p>
      <Splide :options="horizontalSplideOptions">
        <SplideSlide v-for="index in 10" :key="index">
          <ThirdPartySliderCard />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>
