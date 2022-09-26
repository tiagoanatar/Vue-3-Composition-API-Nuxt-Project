<script setup lang="ts">
/**
 * TODO: Remove this component. This is not intended to be the one in the slider,
 * it was made to add it for the Splide POC.
 */
interface Props {
  id?: string;
  balance?: string;
  payment?: string;
  type?: string;
  status?: string;
  date?: string;
}

// Just mock data
withDefaults(defineProps<Props>(), {
  id: '12456789',
  balance: '250.00',
  payment: '250',
  type: 'Payday loan',
  status: 'active',
  date: '02/15/22',
});
</script>

<template>
  <div class="theme-splide-card">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <p class="card-title">
            <b>{{ type }}</b>
          </p>
          <span>Loan #{{ id }}</span>
        </div>
        <div class="col">
          <p>${{ balance }} &#9432;</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <p class="h5">
          <b>Balance</b>
        </p>
        <p class="h1">{{ balance }}</p>
      </div>
      <div class="row">
        <div class="col">
          <p>Status</p>
          <p>{{ status }}</p>
        </div>
        <div class="col">
          <p>First payment</p>
          <p>{{ payment }}</p>
        </div>
        <div class="col">
          <p>Due date</p>
          <p>{{ date }}</p>
        </div>
      </div>
      <hr />
      <div class="text-center">
        <a href="#" class="btn btn-primary text-center">Make a new payment</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.theme-splide-card {
  margin-bottom: 1rem;
  margin: 1.25rem;
  max-width: 21.25rem;
  min-height: 19.375rem;
}

.splide__arrows {
  display: none;
}

.splide__pagination__page.is-active {
  border: 1px solid;
}
</style>
