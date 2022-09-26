<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { maskEmail } from '@/constants/masks';

const { getModalInfoData } = useContentful();
const { data } = getModalInfoData(
  'widget-modal-personal-ssn-already-have-account'
);

const testId = 'existing-online-ssn';

interface Props {
  showModal?: boolean;
  email: string;
}

const props = withDefaults(defineProps<Props>(), {
  showModal: false,
});

const handleModalCTA = async () => {
  const notification = useNotification();
  const { logOut } = useSession();

  // NOTE: Updates login page notification message.
  notification.updateMessage(
    `${data?.value?.modal?.footer} ${maskEmail(props.email)}`
  );

  await logOut();

  // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
  location.href = Routes.Login;
};
</script>

<template>
  <ClientOnly>
    <BaseModal
      v-if="data?.modal?.headline"
      id="existing-online-ssn"
      background="blue-image"
      :data-test-id="testId"
      :show-me="showModal"
    >
      <template #default>
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.modal?.headline }}</h1>
          <p>{{ data?.modal?.subheadline }} {{ maskEmail(email) }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          variation="secondary"
          :data-test-id="testId"
          :label="data?.modal?.ctaLabel"
          @click="handleModalCTA"
        />
      </template>
      <template #footer>
        <img v-if="data?.modal?.image" alt="" :src="data?.modal?.image" />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
