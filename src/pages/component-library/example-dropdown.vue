<script setup lang="ts">
useHead({
  title: 'AA | Component Library - dropdown',
});

const options = [
  {
    name: 'Alaska ',
    value: 'AL',
  },
  {
    name: 'Arizona ',
    value: 'AR',
  },
  {
    name: 'California ',
    value: 'CL',
  },
  {
    name: 'Florida ',
    value: 'FL',
  },
  {
    name: 'Option 5 ',
    value: 'opt5',
  },
  {
    name: 'Option 6 ',
    value: 'opt6',
  },
  {
    name: 'Option 7 ',
    value: 'opt7',
  },
  {
    name: 'Option 8 ',
    value: 'opt8',
  },
  {
    name: 'Option 9 ',
    value: 'opt9',
  },
  {
    name: 'Option 10 ',
    value: 'opt10',
  },
  {
    name: 'Option 11 ',
    value: 'opt11',
  },
  {
    name: 'Option 12 ',
    value: 'opt12',
  },
];

const callbackHandler = (data) => {
  console.log('callback data', data);
};
</script>
<template>
  <div class="container">
    <h1>Dropdown</h1>

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
          <code>BaseDropdown</code> component responsible buttons with multiple
          dro down options.
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
              <td>class</td>
              <td>CSS class applied to the component</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Main id of the component</td>
            </tr>
            <tr>
              <td>items</td>
              <td>
                Array of objects containing dropdown items that will feed the
                component. It uses the interface <code>dropdownItem[]</code>
              </td>
            </tr>
            <tr>
              <td>label</td>
              <td>Main component label text</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>Internal button text</td>
            </tr>
          </tbody>
        </table>

        <p class="fs-5">Type Interface(<code>dropdownItem[]</code>):</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>Name of the option</td>
            </tr>
            <tr>
              <td>value</td>
              <td>Value of the option</td>
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
      No component display. It need at least 1 object to work.

      <p class="mt-5 fs-5">
        Default component with basic props (id="default", placeholder="Default",
        :items="options"):
      </p>
      <BaseDropdown
        id="default"
        placeholder="Default"
        :items="options"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Primary component class style (class="btn-primary"):
      </p>
      <BaseDropdown
        id="primary"
        placeholder="Primary"
        :items="options"
        class="btn-primary"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Secondary component class style (class="btn-secondary"):
      </p>
      <BaseDropdown
        id="secondary-btn-dropdown"
        placeholder="Secondary"
        :items="options"
        class="btn-secondary"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Success component class style (class="btn-success"):
      </p>
      <BaseDropdown
        id="sucess-btn-dropdown"
        placeholder="Success"
        :items="options"
        class="btn-success"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Danger component class style (class="btn-danger"):
      </p>
      <BaseDropdown
        id="danger-btn-dropdown"
        placeholder="Danger"
        :items="options"
        class="btn-danger"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Warning component class style (class="btn-warning"):
      </p>
      <BaseDropdown
        id="warning-btn-dropdown"
        placeholder="Warning"
        :items="options"
        class="btn-warning"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">
        Info-secondary component class style (class="Info-secondary"):
      </p>
      <BaseDropdown
        id="info-btn-dropdown"
        placeholder="Info"
        :items="options"
        class="Info-secondary"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">Light component class style (class="btn-light"):</p>
      <BaseDropdown
        id="Light-btn-dropdown"
        placeholder="Light"
        :items="options"
        class="btn-light"
        @click="callbackHandler"
      ></BaseDropdown>

      <p class="mt-5 fs-5">Dark component class style (class="btn-dark"):</p>
      <BaseDropdown
        id="dark-btn-dropdown"
        placeholder="Dark"
        :items="options"
        class="btn-dark"
        @click="callbackHandler"
      ></BaseDropdown>
    </div>
  </div>
</template>
