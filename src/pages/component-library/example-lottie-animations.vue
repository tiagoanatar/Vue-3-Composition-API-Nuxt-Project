<script setup lang="ts">
import 'vue3-lottie/dist/style.css';
import CarJSON from '@/assets/lotties/car.json';
import CountdownJSON from '@/assets/lotties/countdown.json';
import DogJSON from '@/assets/lotties/dog.json';
import { Pages } from '@/constants/pages';
import { Vue3Lottie } from 'vue3-lottie';
import { ref } from 'vue';

const playCar = ref(false);
const customControl = ref(null);
const completed = ref(0);
const direction = ref('forward');
const events = ['play', 'pause', 'stop', 'reverse'];

useHead({
  title: 'AA | Lottie Animations - Spike',
});

const handleActions = (type = '') => {
  if (['play', 'pause', 'stop'].includes(type)) {
    customControl.value[type]();
  }

  if (type === 'reverse') {
    direction.value = direction.value === 'forward' ? 'reverse' : 'forward';
    customControl.value.setDirection(direction.value);
  }
};
</script>

<template>
  <div class="container">
    <h1>Lottie Animations - [Spike]</h1>

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
          POC demonstrating the use of the
          <a href="https://airbnb.design/lottie/">lottie</a> in VueJS
        </p>
        <p>
          Through the <code>Vue3Lottie</code> component, it is possible to pass
          the <b>.json</b>
          file in addition to controlling the animation
        </p>

        <p class="fs-5">Libraries:</p>
        <p>
          <a href="https://vue3-lottie.vercel.app/">vue3-lottie</a>
        </p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        You can see all the props exposed by the library in this
        <a href="https://vue3-lottie.vercel.app/guide.html#available-props"
          >link</a
        >
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
        <p class="fs-5">Basic example with animationData:</p>
        <Vue3Lottie :animation-data="DogJSON" :height="200" :width="200" />
        <p class="mt-5 fs-5">Pay/stop:</p>
        <Vue3Lottie
          :animation-data="CarJSON"
          :height="200"
          :width="200"
          :pause-animation="playCar"
        />
        <BaseButton label="Play/Pause Animation" @click="playCar = !playCar" />
        <p class="mt-5 fs-5">Custom Controls:</p>
        <Vue3Lottie
          ref="customControl"
          :animation-data="CountdownJSON"
          :height="200"
          :width="200"
          @on-loop-complete="completed++"
        />
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-lottie-animations`"
          alert-type="light"
          :message="`This animation has completed ${completed} times.`"
        />
        <div class="btns-group">
          <BaseButton
            v-for="(event, key) in events"
            :key="key"
            :label="event"
            @click="handleActions(event)"
          />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<!-- NOTE: Scoped styles are being used given that this component-library could be disposed in the future. -->
<style scoped lang="scss">
.btns-group {
  display: flex;
  flex-flow: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}
</style>
