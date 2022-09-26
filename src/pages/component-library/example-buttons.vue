<script setup lang="ts">
import { IconNames } from '@/constants/icons';
import { Pages } from '@/constants/pages';

useHead({
  title: 'AA | Component Library - Buttons',
});
</script>

<template>
  <div class="container">
    <h1>Buttons</h1>

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
          <code>BaseButton</code> responsible for the site buttons and call to
          actions.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A6"
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
              <td>isDisabled</td>
              <td>Disable the button state</td>
            </tr>
            <tr>
              <td>isLoading</td>
              <td>Show the spinner on the button</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Main content of the button</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Allow the selection of different sizes of the button</td>
            </tr>
            <tr>
              <td>type</td>
              <td>Button type of: button, submit, reset</td>
            </tr>
            <tr>
              <td>variation</td>
              <td>Will change the main color style of the button</td>
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
        <BaseButton :data-test-id="`${Pages.ComponentLibrary}-button-default`"
        />

        <p class="mt-5 fs-5">
          Primary button with size and disable props (size="sm", size="lg" and
          is-disabled):
        </p>
        <div class="btns-group">
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-primary-small`"
            label="Small"
            size="sm"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-primary-medium`"
            label="Medium"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-primary-large`"
            label="Large"
            size="lg"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-primary-disabled`"
            label="Disabled"
            size="lg"
            is-disabled
          />
        </div>

        <p class="mt-5 fs-5">
          Secondary button with size, variations and disable props (size="sm",
          size="lg", variation="secondary" and is-disabled):
        </p>
        <div class="btns-group">
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-secondary-small`"
            label="Small"
            size="sm"
            variation="secondary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-secondary-medium`"
            label="Medium"
            variation="secondary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-secondary-large`"
            label="Large"
            size="lg"
            variation="secondary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-secondary-disabled`"
            is-disabled
            label="Disabled"
            size="lg"
            variation="secondary"
          />
        </div>

        <p class="mt-5 fs-5">
          Tertiary button with size, variations and disable props (size="sm",
          size="lg", variation="outline-primary" and is-disabled):
        </p>
        <div class="btns-group">
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-tertiary-small`"
            label="Small"
            size="sm"
            variation="outline-primary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-tertiary-medium`"
            label="Medium"
            variation="outline-primary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-tertiary-large`"
            label="Large"
            size="lg"
            variation="outline-primary"
          />
          <BaseButton
            :data-test-id="`${Pages.ComponentLibrary}-button-tertiary-disabled`"
            is-disabled
            label="Disabled"
            size="lg"
            variation="outline-primary"
          />
        </div>
        <p class="mt-5 fs-5">Buttons with Loading <code>:is-loading</code></p>
        <div class="btns-group">
          <BaseButton
            label="Small"
            size="sm"
            is-loading
            variation="secondary"
          />
          <BaseButton label="Medium" is-loading />
          <BaseButton label="Large" size="lg" is-loading />
          <BaseButton label="Disabled" is-loading is-disabled />
        </div>
        <p class="mt-5 fs-5">
          Minimalist button with size, variations and disable props (size="sm",
          size="lg", variation="minimal and is-disabled):
        </p>
        <div class="btns-group">
          <BaseButton label="Small" size="sm" variation="minimal" />
          <BaseButton label="Medium" variation="minimal" />
          <BaseButton label="Large" size="lg" variation="minimal" />
          <BaseButton
            :icon="IconNames.AlertCircle"
            is-disabled
            label="Disabled"
            size="lg"
            variation="minimal"
          />
        </div>

        <p class="mt-5 fs-5">
          Buttons with icons, (:icon="IconNames.AlertCircle",
          :icon="IconNames.Search", :icon="IconNames.EyeOff", is-reverse="true"
          and size, color and state variations):
        </p>
        <div class="btns-group">
          <BaseButton :icon="IconNames.AlertCircle" label="Small" size="sm" />
          <BaseButton
            :icon="IconNames.AlertCircle"
            is-disabled
            is-reverse
            label="Small"
            size="sm"
          />
          <BaseButton
            :icon="IconNames.Search"
            label="Medium"
            variation="secondary"
          />
          <BaseButton
            :icon="IconNames.Search"
            is-disabled
            is-reverse
            label="Medium"
            variation="secondary"
          />
          <BaseButton
            :icon="IconNames.EyeOff"
            label="Disabled"
            size="lg"
            variation="outline-primary"
          />
          <BaseButton
            :icon="IconNames.EyeOff"
            is-disabled
            is-reverse
            label="Disabled"
            size="lg"
            variation="outline-primary"
          />
        </div>
      </div>
    </div>
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
