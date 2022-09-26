<script setup lang="ts">
import { IconNames } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { Pages } from '@/constants/pages';

useHead({
  title: 'AA | Component Library - Alerts',
});
</script>

<template>
  <div class="container">
    <h1>Alerts</h1>

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
          <code>BaseAlert</code> responsible for content and form alert messages
          to inform the user of errors, success or validation issues.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-S1---8?node-id=2483%3A47626"
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
              <td>alertType</td>
              <td>Will vary the prop alert based in its usage situation</td>
            </tr>
            <tr>
              <td>message</td>
              <td>Main content inside the component</td>
            </tr>
            <tr>
              <td>iconName</td>
              <td>Icon file to be used</td>
            </tr>
            <tr>
              <td>hasLargePadding</td>
              <td>Define the size of the alert</td>
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
        <BaseAlert :data-test-id="`${Pages.ComponentLibrary}-default`" />

        <p class="mt-5 fs-5">Size prop only (has-large-padding):</p>
        <BaseAlert
          has-large-padding
          :data-test-id="`${Pages.ComponentLibrary}-large-padding`"
        />

        <p class="mt-5 fs-5">Icon change(:icon-name="IconNames.ArrowUp"):</p>
        <BaseAlert
          alert-type="light"
          :icon-name="IconNames.ArrowUp"
          :data-test-id="`${Pages.ComponentLibrary}-arrow-up`"
        />

        <p class="mt-5 fs-5">Icon color change(:icon-color="Colors.AARed"):</p>
        <BaseAlert
          alert-type="light"
          :icon-color="Colors.AARed"
          :data-test-id="`${Pages.ComponentLibrary}-red`"
        />

        <p class="mt-5 fs-5">Primary alert type (alert-type="primary"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-primary`"
          alert-type="primary"
          message="This is an example of an alert"
        />

        <p class="mt-5 fs-5">Secondary alert type (alert-type="secondary"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-secondary`"
          alert-type="secondary"
          message="This is an example of an alert"
        />

        <p class="mt-5 fs-5">Success alert type (alert-type="success"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-success`"
          alert-type="success"
          message="This is an example of an alert"
        />

        <p class="mt-5 fs-5">Danger alert type (alert-type="danger"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-danger`"
          alert-type="danger"
          message="This is an example of an alert"
        />

        <p class="mt-5 fs-5">Info alert type (alert-type="info"):</p>
        <BaseAlert
          alert-type="info"
          message="This is an example of an alert"
          :data-test-id="`${Pages.ComponentLibrary}-info`"
        />

        <p class="mt-5 fs-5">Warning alert type (alert-type="warning"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-warning`"
          alert-type="warning"
          message="This is an example of an alert"
        />

        <p class="mt-5 fs-5">Light alert type (alert-type="light"):</p>
        <BaseAlert
          :data-test-id="`${Pages.ComponentLibrary}-light`"
          alert-type="light"
          message="This is an example of an alert"
        />
      </div>
    </div>
  </div>
</template>
