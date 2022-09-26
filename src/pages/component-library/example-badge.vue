<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Badge',
});
</script>

<template>
  <div class="container">
    <h1>Status Badge</h1>

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
          <code>BaseBadge</code> component responsible for displaying loan
          status.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-S1---8?node-id=4196%3A60977"
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
              <td>label</td>
              <td>Label of the badge</td>
            </tr>
            <tr>
              <td>badge-type</td>
              <td>Type of the badge(active,processing)</td>
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
      <BaseBadge />
      <p class="mt-5 fs-5">Component with basic props (:label="Payday Loan")</p>
      <BaseBadge label="Payday Loan" />

      <p class="mt-5 fs-5">
        Component with basic props (:label="Active" :badge-type="active")
      </p>
      <BaseBadge label="Active" badge-type="active" />
      <p class="mt-5 fs-5">
        Component with basic props (:label="Processing"
        :badge-type="processing")
      </p>
      <BaseBadge label="Processing" badge-type="processing" />
      <p class="mt-5 fs-5">
        Component with props (:label="Processing" :badge-type="processing"
        :status="review")
      </p>
      <BaseBadge label="Processing" badge-type="processing" status="review" />
      <p class="mt-5 fs-5">
        Component with props (:label="Processing" :badge-type="processing"
        :status="missing-docs")
      </p>
      <BaseBadge
        label="Processing"
        badge-type="processing"
        status="missing-docs"
      />
    </div>
  </div>
</template>
