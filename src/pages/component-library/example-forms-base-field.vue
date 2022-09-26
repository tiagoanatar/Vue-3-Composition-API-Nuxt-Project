<script setup lang="ts">
useHead({
  title: 'AA | Component Library - Forms',
});
</script>

<template>
  <div class="container">
    <h2>Forms</h2>
    <div class="row">
      <div class="col">
        <BaseForm>
          <BaseFieldSet>
            <BaseInput
              input-name="Example input"
              input-id="ex4m9l3-1d"
              label="Example label"
              has-hint="This is a hint"
              has-optional="Optional text"
              validation-error="This is a validation error"
            />
          </BaseFieldSet>
        </BaseForm>
      </div>
    </div>
  </div>
</template>
