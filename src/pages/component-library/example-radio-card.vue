<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Radio Card Button',
});

const radioCheckedValue = reactive({
  value: '',
});

function clickEventRadio(value: string) {
  radioCheckedValue.value = value;
  console.log(radioCheckedValue.value);
}

const selectMockData = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
];
</script>

<template>
  <div class="container">
    <h1>Form Validation</h1>

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
          Radio input component variation, <code>RadioCardButton</code>. It is
          basically a copy of the original <code>BaseRadioButton</code> with
          some new properties and style classes.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=16169%3A185461"
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
              <td>checkedValue</td>
              <td>
                Value selected by the radio input. This prop is fed by a
                reactive data will make sure that the radio inputs set submits
                just one single value.
              </td>
            </tr>
            <tr>
              <td>id</td>
              <td>Component main id</td>
            </tr>
            <tr>
              <td>isDisabled</td>
              <td>Activate the disable state</td>
            </tr>
            <tr>
              <td>isValidateDisabled</td>
              <td>
                Will turn off the validation message for other radio input
                fields while using a validation library. This will ensure that
                when the user try to submit a form, it will not insert an error
                message for all the radio inputs, but just for the last one that
                you allow to have the message. This message will be related to
                all the radio input fields.
              </td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label title</td>
            </tr>
            <tr>
              <td>description</td>
              <td>Input label description</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Input name</td>
            </tr>
            <tr>
              <td>value</td>
              <td>Input value that will emit to the prop "checkedValue".</td>
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

    <div class="row mb-3">
      <div class="col">
        <RadioCardButton
          id="ex4m9l3-1d1"
          :checked-value="radioCheckedValue.value"
          :is-validate-disabled="false"
          data-test-id="radio-1"
          label="Example label 1"
          description="Label description"
          name="radioSet1"
          value="This is the radio input data 1"
          @click="clickEventRadio"
        />
        <RadioCardButton
          id="ex4m9l3-1d2"
          :checked-value="radioCheckedValue.value"
          :is-validate-disabled="false"
          data-test-id="radio-2"
          label="Example label 2"
          description="Label description"
          name="radioSet1"
          value="This is the radio input data 2"
          @click="clickEventRadio"
        />
        <RadioCardButton
          id="ex4m9l3-1d3"
          :checked-value="radioCheckedValue.value"
          data-test-id="radio-3"
          label="Example label 3"
          description="Label description"
          name="radioSet1"
          value="This is the radio input data 3"
          @click="clickEventRadio"
        />
      </div>
    </div>
  </div>
</template>
