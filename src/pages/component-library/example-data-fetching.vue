<script setup lang="ts">
// TODO: Delete this file since it is an example for reference only.
import { Pages } from '@/constants/pages';

useHead({
  title: 'AA | Component Library - Data fetching [SPIKE]',
});

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodoStatus = computed(() => async (todoId: number): Promise<void> => {
  const { data } = await useFetch<string, Pick<ITodo, 'completed'>>(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { pick: ['completed'] }
  );

  await alert(
    `Task #${todoId} is ${data.value.completed ? 'completed' : 'pending'}`
  );
});

// Usecases: fetch SSR data, check if user is logged in since it is just an asynchronous function.
const {
  data: todos = [],
  error,
  pending,
  refresh,
} = await useLazyAsyncData('todos', () =>
  $fetch<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
);
</script>

<template>
  <div class="container">
    <h1>Data fetching - [SPIKE]</h1>

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
        <p>POC/spike to demonstrate the data fetch functions from Nuxt3.</p>

        <p class="fs-5">Figma Link</p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>N/A</p>
      </div>
      <div class="col">
        <p class="fs-5">Props:</p>
        N/A
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
        <p>
          <BaseAlert
            v-if="error"
            :data-test-id="`${Pages.ComponentLibrary}-data-fetch`"
            alert-type="danger"
            :message="error"
          />

          <BaseButton label="Refresh" size="sm" @click="refresh(true)" />
        </p>

        <p class="fs-5">Todos:</p>

        <ul>
          <li v-for="todo in todos?.splice(0, 10)" :key="todo?.title">
            <p>{{ todo?.title }}</p>
            <BaseButton
              label="Completed?"
              size="sm"
              variation="secondary"
              @click="getTodoStatus(todo?.id)"
            />
          </li>
        </ul>
      </div>
    </div>
    <BaseModal id="fetching" :show-me="pending" :close-modal="false">
      <template #default>
        <h2>Fetching...</h2>
      </template>
    </BaseModal>
  </div>
</template>
