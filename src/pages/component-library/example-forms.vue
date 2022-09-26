<script setup lang="ts">
import { AnyObject } from 'yup/lib/types';
import { useLoginFormValidations } from '~~/src/composables/schemas/useSchemas';

useHead({
  title: 'AA | Component Library - Form Validation',
});

function onSubmit(values: AnyObject) {
  console.log(values);
}

const schema = useLoginFormValidations();

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
          Components <code>BaseCheckbox</code>, <code>BaseInput</code>,
          <code>BaseFieldSet</code>, <code>BaseDateInput</code>,
          <code>BaseRadioButton</code> and
          <code>BaseSelectInput</code> responsible for the site form inputs.
        </p>
        <p>
          Below is an example of form validation using the libraries
          Vee-Validade(https://vee-validate.logaretm.com/v4/) and
          Yup(https://github.com/jquense/yup). Please run: <code>npm i</code> to
          install.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A19"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>
          Vee-Validade(https://vee-validate.logaretm.com/v4/) and
          Yup(https://github.com/jquense/yup).
        </p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>

        <hr />
        BaseCheckbox
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Component main id</td>
            </tr>
            <tr>
              <td>isDisabled</td>
              <td>Disable the input if marked as true</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label text</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Input name</td>
            </tr>
          </tbody>
        </table>

        <hr />
        BaseInput
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hint</td>
              <td>Display hint text</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Component main id</td>
            </tr>
            <tr>
              <td>isActive</td>
              <td>Activate the active state</td>
            </tr>
            <tr>
              <td>isReadOnly</td>
              <td>Activate the read only state</td>
            </tr>
            <tr>
              <td>isValid</td>
              <td>Activate the valid state</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label text</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Input name</td>
            </tr>
            <tr>
              <td>optionalText</td>
              <td>Activate optional helper text</td>
            </tr>
            <tr>
              <td>type</td>
              <td>Define input type</td>
            </tr>
            <tr>
              <td>validationError</td>
              <td>
                Validation error message prop not connected to any validation
                library
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
        BaseFieldSet
        <hr />
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
              <td>Disable input fields</td>
            </tr>
          </tbody>
        </table>

        <hr />
        BaseDateInput
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hint</td>
              <td>Display hint text</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Component main id</td>
            </tr>
            <tr>
              <td>isActive</td>
              <td>Activate the active state</td>
            </tr>
            <tr>
              <td>isReadOnly</td>
              <td>Activate the read only state</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label text</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Input name</td>
            </tr>
            <tr>
              <td>max</td>
              <td>Max date value allowed for user selection</td>
            </tr>
            <tr>
              <td>min</td>
              <td>Min date value allowed for user selection</td>
            </tr>
            <tr>
              <td>optionalText</td>
              <td>Activate optional helper text</td>
            </tr>
          </tbody>
        </table>

        <hr />
        BaseRadioButton
        <hr />
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
              <td>Input label text</td>
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

        <hr />
        BaseSelectInput
        <hr />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hint</td>
              <td>Display hint text</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Component main id</td>
            </tr>
            <tr>
              <td>isActive</td>
              <td>Activate the active state</td>
            </tr>
            <tr>
              <td>isDisabled</td>
              <td>Activate the disabled state</td>
            </tr>
            <tr>
              <td>isMultiple</td>
              <td>Activate multiple options selection</td>
            </tr>
            <tr>
              <td>items</td>
              <td>
                Array of objects containing select items that will feed the
                component. It uses the interface <code>SelectItem[]</code>
              </td>
            </tr>
            <tr>
              <td>label</td>
              <td>Input label text</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Input name</td>
            </tr>
            <tr>
              <td>optionalText</td>
              <td>Activate optional helper text</td>
            </tr>
          </tbody>
        </table>

        <p class="fs-5">Type Interface(<code>SelectItem[]</code>):</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>label</td>
              <td>Label content of each select option</td>
            </tr>
            <tr>
              <td>value</td>
              <td>Value of each select option</td>
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
        <BaseForm :schema="schema" :submit="onSubmit" data-test-id="form">
          <p class="fs-5">Regular Inputs</p>
          <hr />
          <BaseInput
            id="firstName"
            data-test-id="first-name"
            label="First Name"
            name="firstName"
            optional-text="Optional text"
          />
          <BaseInput
            id="lastName"
            data-test-id="last-name"
            hint="This is a hint"
            label="Last Name"
            name="lastName"
          />
          <BaseInput
            id="email"
            data-test-id="email"
            label="Email Address"
            name="email"
            type="email"
          />
          <BaseInput
            id="phoneNumber"
            data-test-id="phone"
            label="Phone Number"
            name="phoneNumber"
            type="tel"
          />

          <BaseInput
            id="search"
            data-test-id="search"
            label="Search Input"
            name="search"
            type="search"
          />

          <p class="mt-5 fs-5">Checkbox</p>
          <hr />
          <BaseCheckbox
            id="optionCheck1"
            data-test-id="check-1"
            label="Label Text 1"
            name="optionCheck1"
          />
          <BaseCheckbox
            id="optionCheck2"
            data-test-id="check-2"
            label="Label Text 2"
            name="optionCheck2"
          />

          <p class="mt-5 fs-5">Radio</p>
          <hr />
          <BaseRadioButton
            id="ex4m9l3-1d1"
            :checked-value="radioCheckedValue.value"
            :is-validate-disabled="false"
            data-test-id="radio-1"
            label="Example label 1"
            name="radioSet1"
            value="This is the radio input data 1"
            @click="clickEventRadio"
          />
          <BaseRadioButton
            id="ex4m9l3-1d2"
            :checked-value="radioCheckedValue.value"
            :is-validate-disabled="false"
            data-test-id="radio-2"
            label="Example label 2"
            name="radioSet1"
            value="This is the radio input data 2"
            @click="clickEventRadio"
          />
          <BaseRadioButton
            id="ex4m9l3-1d3"
            :checked-value="radioCheckedValue.value"
            data-test-id="radio-3"
            label="Example label 3"
            name="radioSet1"
            value="This is the radio input data 3"
            @click="clickEventRadio"
          />

          <p class="mt-5 fs-5">Date Input</p>
          <hr />
          <BaseDateInput
            id="inputDate1"
            data-test-id="date-1"
            label="Date Input Label 1"
            name="inputDate1"
          />

          <p class="mt-5 fs-5">
            Date Input with Min and Max Values(2008-03-26 to 2022-03-26)
          </p>
          <hr />
          <BaseDateInput
            id="inputDate2"
            data-test-id="date-2"
            label="Date Input Label 2"
            name="inputDate2"
          />

          <p class="mt-5 fs-5">Select Input</p>
          <hr />
          <BaseSelectInput
            id="selectInput1"
            :items="selectMockData"
            data-test-id="select-1"
            label="select input 1"
            name="selectInput1"
            optional-text="Optional text"
          />

          <p class="mt-5 fs-5">Multiple Select Input</p>
          <hr />
          <BaseSelectInput
            id="selectInput2"
            :items="selectMockData"
            data-test-id="select-2"
            hint="this is a hint sample"
            is-multiple
            label="select input 2"
            name="selectInput2"
          />

          <p class="mt-5 fs-5">Password Input</p>
          <hr />
          <BaseInput
            id="password"
            data-test-id="password"
            label="Password"
            name="password"
            type="password"
          />
          <hr />
        </BaseForm>
      </div>
    </div>
  </div>
</template>
