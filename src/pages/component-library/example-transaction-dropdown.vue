<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Transaction Dropdown',
});

const id = 'transactionDropdownId';

const transactionDataItems = {
  sectionTitle: 'All Transactions',
  routeItems: {
    url: '/see-all',
    label: 'See all',
  },

  transactionItems: [
    {
      name: 'Option 1 ',
      value: 'opt1',
    },
    {
      name: 'Option 2 ',
      value: 'opt2',
    },
    {
      name: 'Option 3 ',
      value: 'opt3',
    },
    {
      name: 'Option 4 ',
      value: 'opt4',
    },
    {
      name: 'Option 5 ',
      value: 'opt5',
    },
  ],
};

const callbackHandler = () => {
  console.log('callback data');
};
</script>
<template>
  <div class="container">
    <h1>Transaction Dropdown</h1>

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
          <code>Transaction Dropdown</code> component for the transaction
          section on the product details page.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=9784%3A183228"
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
              <td>transactionItems</td>
              <td>The dropdown items</td>
            </tr>
            <tr>
              <td>link</td>
              <td>A link to route to all transaction page</td>
            </tr>
            <tr>
              <td>sectionTitle</td>
              <td>The title of transaction dropdown section</td>
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
      <p class="mt-3 fs-5">Default component with basic props:</p>
      <TransactionDropdown
        :data-test-id="id"
        v-bind="transactionDataItems"
        @click="callbackHandler"
      />
    </div>
  </div>
</template>
