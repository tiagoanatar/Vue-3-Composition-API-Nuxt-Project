<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Modal Loader [SPIKE]',
});

const showMe = ref(true);
const seconds = ref(10);
const closeModal = ref(false);
let interval = null;

const handleInterval = () => {
  seconds.value = 10;
  showMe.value = true;
  interval = setInterval(() => {
    seconds.value = seconds.value - 1;
    if (seconds.value === 0) {
      showMe.value = false;
      clearInterval(interval);
    }
  }, 1000);
};

const handleHide = () => {
  if (interval) {
    showMe.value = false;
    clearInterval(interval);
  }
};

onMounted(() => {
  handleInterval();
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="container">
    <h1>Modal Loader [SPIKE]</h1>

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
          This spike demonstrates how the modal can be used to display a loader
          (useful for fetch events).
        </p>

        <p class="fs-5">Figma Link</p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">
          The current modal component is extended, adding two new props.
        </p>
      </div>
      <div class="col">
        <p class="fs-5">Additional Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>show-me</td>
              <td>Indicates if the modal is displayed</td>
            </tr>
            <tr>
              <td>close-modal</td>
              <td>Whether to allow the modal to close</td>
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
        <BaseButton label="Simulate fetch" size="sm" @click="handleInterval" />
      </div>
    </div>
    <BaseModal
      id="automatic"
      :show-me="showMe"
      :close-modal="closeModal"
      @handle-hide="handleHide"
    >
      <template #default
        ><h2>Modal closes in {{ seconds }} seconds</h2></template
      >
    </BaseModal>
  </div>
</template>
