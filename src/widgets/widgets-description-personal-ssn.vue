<script setup lang="ts">
import { TPlaceHolder } from '../constants/bootstrap';

const { getDescriptionData } = useContentful();
const { data, pending } = getDescriptionData('widget-description-personal-ssn');
const titlePlaceHolder: TPlaceHolder[] = [
  { size: 'lg' },
  { col: 6, size: 'lg' },
];
const copyPlaceHolder: TPlaceHolder[] = [{ col: 5 }, { col: 6 }, { col: 7 }];
const copy = ref('');

/**
 * TODO: Since richtext is not used, the necessary text
 * to be displayed is generated. (v-html directive is used),
 * it would be ideal to use a contentful rich text renderer
 */
watchEffect(() => {
  if (data.value?.labels) {
    copy.value = data.value?.labels
      ?.map(
        (v) =>
          '<p>' +
          v?.content
            .map((p) => {
              const isBold =
                p?.marks?.length !== 0 &&
                p.marks.filter((v) => v?.type === 'bold')?.length !== 0;

              return isBold
                ? `<span class='theme-loan-application-body-copy-bold'>${p?.value}</span>`
                : p?.value;
            })
            .join('') +
          '</p>'
      )
      .join('');
  }
});
</script>

<template>
  <LoanApplicationBodyCopy>
    <BaseSkeletonLoader :is-loading="pending" :rows="titlePlaceHolder">
      <h1>{{ data?.title }}</h1>
    </BaseSkeletonLoader>
    <BaseSkeletonLoader :is-loading="pending" :rows="copyPlaceHolder">
      <span v-html="copy" />
    </BaseSkeletonLoader>
  </LoanApplicationBodyCopy>
</template>
