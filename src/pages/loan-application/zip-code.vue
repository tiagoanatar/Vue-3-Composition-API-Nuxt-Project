<script setup lang="ts">
import { Routes } from '@/constants/pages';

enum Channel {
  BOTH = 'both',
  ONLINE = 'online',
  NONE = 'none',
  IN_STORE = 'in-store',
}

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'AA | Loan Application Page | Zipcode',
});

definePageMeta({
  layout: 'layout-application',
  middleware: 'signin',
});

const router = useRouter();
const zipcode = ref('');
const showInStore = ref(false);
const showEmail = ref(false);
const showNotification = ref(false);
const notification = useNotification();
const { updateUser } = useUserData();

// TODO: After login/register any message will be removed. Remove once login routing is fixed.
notification.deleteMessage();

const handleAction = (data) => {
  const { channel = '', zipCode: newZipcode = '' } = data;
  zipcode.value = newZipcode;

  // TODO: Remove this validation since zipcode service returns a 500 if the zipcode is invalid.
  if (!channel) {
    // TODO: Update the message with contentful.
    notification.updateMessage('Whoops, invalid zipcode. Please try again.');

    showNotification.value = true;
  }

  if ([Channel.BOTH, Channel.ONLINE].includes(channel)) {
    updateUser({ zipCode: newZipcode });

    return router.push(Routes.Register);
  }

  if (channel === Channel.IN_STORE) {
    showInStore.value = true;
  }

  if (channel === Channel.NONE) {
    showEmail.value = true;
  }
};

const handleHide = () => {
  showInStore.value = false;
  showEmail.value = false;
};
</script>

<template>
  <main>
    <BaseAlert
      v-if="showNotification"
      alert-type="info"
      :message="notification.message.value"
      data-test-id="okta-notification"
    />
    <ClientOnly>
      <div class="theme-loan-application">
        <WidgetsHeaderBlock />
        <WidgetsDescriptionZipcode />
        <WidgetsModalZipcode />
        <WidgetsFormZipcode @handle-action="handleAction" />
        <WidgetsFooterGlobalApplication />
      </div>
      <WidgetsModalInStore
        :show-modal="showInStore"
        @handle-hide="handleHide"
      />
      <WidgetsModalNoService
        :show-modal="showEmail"
        :zipcode="zipcode"
        @handle-hide="handleHide"
      />
    </ClientOnly>
  </main>
</template>
