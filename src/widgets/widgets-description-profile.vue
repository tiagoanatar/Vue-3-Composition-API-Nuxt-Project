<script setup lang="ts">
let username = ref(null);
// Used to show the skeleton loading till the api fetched user name
const pendingState = ref(true);

onMounted(async () => {
  const { getUser } = useAuthClient();
  const { name } = await getUser();
  username.value = name;
  pendingState.value = false;
});
</script>

<template>
  <div class="theme-profile-menu-user">
    <BaseSkeletonLoader
      :is-loading="pendingState"
      :rows="[{ col: 6, size: 'lg' }]"
    >
      <h1>{{ username }}</h1>
    </BaseSkeletonLoader>
  </div>
</template>
