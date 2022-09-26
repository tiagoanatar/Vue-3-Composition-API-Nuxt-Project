<script setup lang="ts">
import { IconNames, IconSizes } from '@/constants/icons';
import { Colors } from '@/constants/colors';
import { kebabToCapitalizeName } from '@/utils/strings';

useHead({
  title: 'AA | Component Library - Icons',
});
</script>

<template>
  <div class="container">
    <h1>Icons</h1>

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
          The approach on the icons will be based on having a main component for
          it <code>BaseIcon</code> and then pass the icon we want to use as a
          prop. BaseIcon component will take this value and get the icon's
          properties from a collection. Currently the icons share most of its
          properties so the only values we're going to use are the
          <code>path</code> but the component is able to receive any svg
          attribute as prop.
        </p>

        <p class="fs-5">
          <a href="https://www.figma.com/file/sW3NB6EZZETWKb8JZiKYQO/Purpose-Financial-Design-Kit?node-id=7%3A9"
            >Figma Link</a
          >
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>Adding a new Icon:</p>
        <hr />
        <p>
          In order to add a new icon first go to
          <code>aa-frontend-pwa/src/constants/icons.ts</code>
          and at the <code>IconNames</code> enum add your icon name as camel
          caps, then the paths values as a collection in
          <code>iconProperties</code> definition, ie.
        </p>
        <p>at IconNames:</p>
        <hr />
        <p>
          <code> MyNewIcon = 'my-new-icon', </code>
        </p>

        <p>Using an Icon:</p>
        <hr />
        <p>In order to use an icon first import <code>IconNames</code>:</p>
        <p>
          <code> import { IconNames } from '@/constants/icons'; </code>
        </p>
        <p>And then add the respective icon you want to use as a prop:</p>
        <p>
          <code> {{ `<BaseIcon :name="IconNames.Lock" />` }} </code>
        </p>
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
              <td>color</td>
              <td>
                Icon color. The full list can be see at
                <code>'@/constants/colors'</code> folder
              </td>
            </tr>
            <tr>
              <td>icon</td>
              <td>
                Name of the icon that will be used. The full list can be see at
                <code>'@/constants/icons'</code> folder
              </td>
            </tr>
            <tr>
              <td>size</td>
              <td>Define the size of the icon</td>
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
      <p class="fs-5">Default component (no props):</p>
      No component display.

      <p class="mt-5 fs-5">All icons:</p>

      <div class="row">
        <div
          v-for="(icon, index) in IconNames"
          :key="index"
          class="col-3 text-center mb-2"
        >
          <BaseIcon :name="icon" />
          <p>{{ kebabToCapitalizeName(icon).replace(/\s+/g, '') }}</p>
        </div>
      </div>

      <p class="mt-5 fs-5">Icon with color prop (:color="Colors.AADayBlue"):</p>
      <BaseIcon :name="IconNames.Eye" :color="Colors.AADayBlue" />
      <BaseIcon :name="IconNames.Eye" :color="Colors.AABlackBlue" />

      <p class="mt-5 fs-5">Icon with size prop (:size="IconSizes.Small"):</p>
      <BaseIcon :name="IconNames.DoingGreat" :size="IconSizes.Small" />
      <BaseIcon :name="IconNames.DoingGreat" :size="IconSizes.Large" />

      <p class="mt-5 fs-5">
        Icon with size and color prop (:color="Colors.AADayBlueLight",
        :size="IconSizes.Small"):
      </p>
      <BaseIcon
        :color="Colors.AARed"
        :name="IconNames.DoingGreat"
        :size="IconSizes.Small"
      />
      <BaseIcon
        :color="Colors.AADayBlue"
        :name="IconNames.DoingGreat"
        :size="IconSizes.Large"
      />
    </div>
  </div>
</template>
