<script setup lang="ts">
import { Colors } from '@/constants/colors';
import { IconNames } from '@/constants/icons';

useHead({
  title: 'AA | Component Library - Banners',
});

const figmaDesignLink =
  'https://www.figma.com/file/q9HcS3QfIW2k5TsrC9Tyvd/PF-Dev-%7C-Master-File-All-Sprints?node-id=7557%3A83380';
</script>

<template>
  <div class="container">
    <h1>Banners</h1>
    <div class="row">
      <div class="col">
        <hr />
        <h2>Overview</h2>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-4">
        <p class="fs-5">Description:</p>
        <p>
          Component
          <code>BaseBanner</code> responsible for the banner.
        </p>

        <p class="fs-5">
          <a :href="figmaDesignLink">Figma Link</a>
        </p>

        <p class="fs-5">Libraries:</p>
        <p>N/A</p>

        <p class="fs-5">Additional Notes:</p>
        <p>
          Left side icon will be picked automatically based upon the opted
          variation.
        </p>
      </div>
      <div class="col-12 col-md-8">
        <p class="fs-5">Props:</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" class="col-2">Name</th>
              <th scope="col" class="col-2">Type</th>
              <th scope="col" class="col-2">Default</th>
              <th scope="col" class="col-6">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>variation</td>
              <td>
                <span
                  >'dark'<br />|'error'<br />|&nbsp;'info'<br />|&nbsp;'success'<br />|&nbsp;warning</span
                >
              </td>
              <td>success</td>
              <td>
                Background colors and icons will be different for other variants
              </td>
            </tr>
            <tr>
              <td>heading</td>
              <td>
                <span>string</span>
              </td>
              <td></td>
              <td>Heading for the banner.</td>
            </tr>
            <tr>
              <td>description</td>
              <td>
                <span>string</span>
              </td>
              <td></td>
              <td>Description for the banner.</td>
            </tr>
            <tr>
              <td>link</td>
              <td>
                <span>object&lt;label: string; url: string></span>
              </td>
              <td></td>
              <td>Along with description if want link then add this prop.</td>
            </tr>
            <tr>
              <td>isWithCard</td>
              <td>
                <span>boolean</span>
              </td>
              <td>false</td>
              <td>
                If you want to attached banner below of card the then you have
                to use this props as a <code>true</code>. <br />
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

    <div class="row">
      <div class="col">
        <p class="fs-5">
          Default component (heading:string, description:string):
        </p>
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with SUCCESS variation check it out!"
        />

        <p class="mt-5 fs-5">Variation prop only (variation: 'error'):</p>
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with ERROR variation check it out!"
          variation="error"
        />

        <p class="mt-5 fs-5">Variation prop only (variation: 'info'):</p>
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with INFO variation check it out!"
          variation="info"
        />

        <p class="mt-5 fs-5">Variation prop only (variation: 'dark'):</p>
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with DARK variation check it out!"
          variation="dark"
        />

        <p class="mt-5 fs-5">Variation prop only (variation: 'warning'):</p>
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with WARNING variation check it out!"
          variation="warning"
        />

        <p class="mt-5 fs-5">Is with card prop only (isWithCard: true):</p>
        <BaseBanner
          :data-test-id="`default-props`"
          :is-with-card="true"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with SUCCESS variation check it out!"
        />
        <p class="mt-5 fs-5">
          With slot for right side icon and Variation type prop (variation:
          'info'):
        </p>
        <small
          >If icon slot will be provided then all the icons will be centered on
          a mobile view and right side icon will be visible in a mobile only as
          per the the figma design.</small
        >
        <BaseBanner
          :data-test-id="`default-props`"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with INFO variation check it out!"
          variation="info"
        >
          <template #icon>
            <NuxtLink to="/">
              <BaseIcon
                :name="IconNames.ChevronDown"
                :color="Colors.AABlackBlue"
              />
            </NuxtLink>
          </template>
        </BaseBanner>

        <p class="mt-5 fs-5">Link prop only(:icon-name="IconNames.ArrowUp"):</p>
        <small
          >With link prop, anchor tag will be attached at the end of the
          description's content.</small
        >
        <BaseBanner
          :data-test-id="`default-props`"
          :link="{ label: 'Go to home', url: '#' }"
          description="Aww yeah, you successfully read this important alert message"
          heading="A simple banner with SUCCESS variation check it out!"
        />
      </div>
    </div>
  </div>
</template>
