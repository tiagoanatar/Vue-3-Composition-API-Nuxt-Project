<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Skeleton Loader',
});

const { pending } = useAsyncData(
  'loader',
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve('Load');
      }, 4000)
    ),
  { server: false }
);
</script>

<template>
  <div class="container">
    <h1>Skeleton Loader</h1>

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
          <code>BaseSkeletonLoader</code> component responsible for the skeleton
          loading place holder.
        </p>

        <p class="fs-5">Figma Link</p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>

        <code>BaseSkeletonLoader</code>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>rows</td>
              <td>
                <ul>
                  <li>
                    Array of object specifying number of cols (width) and size
                    (height)
                  </li>
                  <li>Each entry on the array represent a sentence</li>
                  <li>A break line will be added if larger than 12 columns</li>
                </ul>
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
      No component display.

      <p class="mt-5 fs-5">
        Default component with basic props (defaults to 1 row, regular size and
        12 columns):
      </p>
      <div>
        <BaseSkeletonLoader :is-loading="pending">
          <p>Content Loaded (Default).</p>
        </BaseSkeletonLoader>
      </div>

      <p class="mt-5 fs-5">
        Different length and sizes. (example not completing)
      </p>
      <div>
        <BaseSkeletonLoader
          :rows="[
            { col: 6, size: 'xs' },
            { col: 7, size: 'sm' },
            { col: 8 },
            { col: 9, size: 'lg' },
          ]"
        >
          <p>
            This content won't display since no isLoading state is provided.
          </p>
        </BaseSkeletonLoader>
      </div>
    </div>
  </div>
</template>
