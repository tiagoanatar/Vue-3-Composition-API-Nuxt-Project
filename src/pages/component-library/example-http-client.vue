<script setup lang="ts">
useHead({
  title: 'Component Library - Http Client',
});

const httpClient = useAxios();

let responseData: unknown = reactive({}),
  errorMsg: unknown = reactive({});
let isPendingResponse1 = ref(true),
  isPendingResponse2 = ref(true);

// Success response
httpClient.get('https://api.sampleapis.com/avatar/info').then((res) => {
  responseData.value = res;
  isPendingResponse1.value = false;
});

// Error
httpClient
  .get('https://api.sampleapis.com/error')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    errorMsg.value = err;
    isPendingResponse2.value = false;
  });
</script>
<template>
  <div class="container">
    <h2>Data Fetch - Success Response</h2>
    <div class="row">
      <div class="col text-success">
        {{ isPendingResponse1 ? 'Pending' : responseData?.value?.data }}
      </div>
    </div>
    <br />
    <h2>Data Fetch - Error Response</h2>
    <div class="row">
      <div class="col text-danger">
        {{ isPendingResponse2 ? 'Pending' : errorMsg?.value?.message }}
      </div>
    </div>
  </div>
</template>
