<script setup lang="ts">
import { EventContext } from '@okta/okta-signin-widget';
import { Routes } from '@/constants/pages';
import { ViewContext } from '@/constants/okta';

type EventContextController = EventContext['controller'];

definePageMeta({
  layout: 'signup-flow',
  middleware: 'signin',
});

const notification = useNotification();
const { viewContext } = useOkta();
const message = notification.message.value;
const showMessage = reactive({ value: false });

const handleZipcodeRedirect = (context: EventContextController): void => {
  if (context === ViewContext.Register) {
    const { user } = useUserData();
    const router = useRouter();

    !user.value?.zipCode && router.push(Routes.Zipcode);
  }
};

const handleMessageVisibility = (context: EventContextController): void => {
  showMessage.value = Boolean(message) && context === ViewContext.Login;
};

watch(
  () => viewContext.value,
  (context) => {
    handleZipcodeRedirect(context);
    handleMessageVisibility(context);
  }
);
</script>

<template>
  <div>
    <div v-if="showMessage.value">
      <BaseAlert
        alert-type="info"
        :message="message"
        data-test-id="okta-notification"
      />
    </div>
    <ThirdPartyOktaWidget />
  </div>
</template>
