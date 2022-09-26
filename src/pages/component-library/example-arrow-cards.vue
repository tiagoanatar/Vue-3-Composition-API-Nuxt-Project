<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Arrow Cards',
});
</script>

<template>
  <div class="container">
    <h1>Arrow Card</h1>

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
          Component
          <code>BaseArrowCard</code> responsible for the site loan origination
          cards. It can receive strings and components as its contents
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=16007%3A193109"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>
          Any element(s) needed can be passed into the named slots. Headings,
          Images, etc.
        </p>
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
              <td>isRecommended</td>
              <td>
                Will trigget the card header and change the color to dark blue.
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

    <div class="row">
      <div class="col">
        <p class="fs-5">Default component (no props):</p>
        <BaseArrowCard data-test-id="arrow-card-test-1" />

        <p class="mt-5 fs-5">Card with arrow URL:</p>
        <BaseArrowCard
          data-test-id="arrow-card-test-2"
          url="http://localhost:3000/component-library/"
        >
          <template #header>Custom Header</template>
          <template #title>Custom Title</template>
          <template #text>Custom text</template>
        </BaseArrowCard>

        <p class="mt-5 fs-5">Recommended card:</p>
        <BaseArrowCard data-test-id="arrow-card-test-3" is-recommended>
          <template #header>Custom Header</template>
          <template #title>Custom Title</template>
          <template #text>Custom text</template>
        </BaseArrowCard>
      </div>
    </div>
  </div>
</template>
