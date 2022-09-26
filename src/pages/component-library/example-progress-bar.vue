<script setup lang="ts">
useHead({
  title: 'AA | Component Library - ProgressBar',
});

const initialProgress = 10;
const mediumProgress = 50;
const finalProgress = 95;
</script>

<template>
  <div class="container">
    <h1>Progress Bar</h1>

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
          <code>BaseProgressBar</code> component responsible for the
          progress/loading bars.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A28"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

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
              <td>progress</td>
              <td>
                Percentage amount that will be tracked by the use of a reactive
                variable
              </td>
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
      <BaseProgressBar />

      <p class="mt-5 fs-5">
        Component percentage progress samples (:progress="initialProgress"):
      </p>
      <p><BaseProgressBar :progress="initialProgress" /></p>
      <p><BaseProgressBar :progress="mediumProgress" /></p>
      <p><BaseProgressBar :progress="finalProgress" /></p>
    </div>
  </div>
</template>
