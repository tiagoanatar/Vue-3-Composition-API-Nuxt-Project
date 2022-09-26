<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Cards',
});
</script>

<template>
  <div class="container">
    <h1>Cards</h1>

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
          <code>BaseCard</code> responsible for the site cards. It can receive
          strings and components as its contents
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A15"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>
          Any custom styling for a card in a particular view or layout should be
          scoped the view that contains it via a related
          <code>_[some-page].scss</code> or
          <code>_[some-component].scss</code> file, and a css class to provide
          the scope.
        </p>
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
              <td>isBaseCard</td>
              <td>
                Disable all template options of the component and turn it in a
                basic blank card with just one content area.
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
        <BaseCard />

        <p class="mt-5 fs-5">
          Card clean version activated by prop (is-base-card):
        </p>
        <BaseCard is-base-card>
          <p>Any type of content can be added in this default slot.</p>
        </BaseCard>

        <p class="mt-5 fs-5">
          Card with all template prop elements(#header, #title, #text and
          #footer):
        </p>
        <BaseCard>
          <template #header>Custom Header</template>
          <template #title>Custom Title</template>
          <template #text>Custom text</template>
          <p>Additional custom body content - Implicit default</p>
          <template #footer><BaseButton label="Small" size="sm" /></template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
