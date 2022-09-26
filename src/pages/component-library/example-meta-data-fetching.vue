<script setup lang="ts">
import { Contentful } from '~~/src/types/contentful';

const data = reactive({
  value: {},
});

async function getContentful(url: string) {
  const env = useEnvironmentVariables();
  const { get } = useAxios();
  const endpointUrl = env.variables.value.CONTENTFUL_ENDPOINT + url;

  try {
    const response: Partial<Contentful> = await get(endpointUrl);
    data.value = response;
    console.log(data.value);
    useHead({
      title: data.value?.data?.entries[0].fields[1].fields.title,
      meta: [
        {
          name: 'description',
          content: data.value?.data?.entries[0].fields[2].fields.description,
        },
      ],
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

getContentful('page?fields.slug=widget-description-re-apply-bank-information');
</script>

<template>
  <div class="container">
    <h1>Meta Data fetching - [SPIKE]</h1>

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
          POC/spike to demonstrate seo meta data fetching that will populate
          each page. Title and description meta data loaded.
        </p>

        <p class="fs-5">Figma Link</p>
        <p>N/A</p>

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
      <div class="col"></div>
    </div>
  </div>
</template>
