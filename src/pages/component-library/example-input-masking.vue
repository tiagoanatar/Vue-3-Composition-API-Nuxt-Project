<script setup lang="ts">
import { Masks } from '@/constants/masks';

useHead({
  title: 'AA | Component Library - Input Masking',
});
</script>

<template>
  <div class="container">
    <h1>Input Masking</h1>

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
          Below is an example of the input masking library
          Vue-The-Mask(https://github.com/vuejs-tips/vue-the-mask).
        </p>

        <p>
          Import the mask strings from the constant
          <code>import { Masks } from '@/constants/masks';</code>
        </p>

        <p class="fs-5">Libraries:</p>
        <p>Vue-The-Mask(https://github.com/vuejs-tips/vue-the-mask)</p>

        <p class="fs-5">Additional Notes:</p>
        <p>Below are the patterns used to create the masking strings</p>
        <p>
          '#': {pattern: /\d/},<br />
          'X': {pattern: /[0-9a-zA-Z]/},<br />
          'S': {pattern: /[a-zA-Z]/},<br />
          'A': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()},<br />
          'a': {pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()},<br />
          '!': {escape: true}<br />
        </p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        You can see all the props exposed by the library in this
        <a href="https://vuejs-tips.github.io/vue-the-mask/">link</a>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <hr />
        <h2>Components Samples</h2>
        <hr />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col">
        <BaseInput
          id="usPhone"
          name="usPhone"
          label="US Phone"
          data-test-id="phone"
          :mask="Masks.UsPhone"
        />

        <BaseInput
          id="zipCode"
          name="zipCode"
          label="Zip Code"
          data-test-id="zipcode"
          :mask="Masks.ZipCode"
        />

        <BaseInput
          id="income"
          name="income"
          label="Income"
          data-test-id="income"
          :mask="Masks.Income"
        />

        <BaseInput
          id="ssn"
          name="ssn"
          label="SSN"
          data-test-id="ssn"
          :mask="Masks.Ssn"
        />

        <BaseInput
          id="reservationCode"
          name="reservationCode"
          label="Reservation Code"
          data-test-id="reservationCode"
          :mask="Masks.ReservationCode"
        />
      </div>
    </div>
  </div>
</template>
