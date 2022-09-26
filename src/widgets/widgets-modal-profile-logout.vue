<script setup lang="ts">
import { Routes } from '@/constants/pages';

const { getModalInfoData } = useContentful();
const { data } = getModalInfoData('widget-modal-logout');

const notification = useNotification();

async function handleExitClick() {
  const session = useSession();
  notification.updateMessage('Logged out');
  await session.logOut();
  location.href = Routes.Login;
}
</script>

<template>
  <ClientOnly>
    <BaseModal
      id="logoutModal"
      background="blue-image"
      data-test-id="logout-user-modal"
    >
      <template #default>
        <!-- TODO: Get this image from cloudinary -->
        <img alt="" src="@/assets/images/modal/gears.png" />
        <LoanApplicationBodyCopy type="modal">
          <h1>{{ data?.titleLogout }}</h1>
          <p>{{ data?.copyLogout }}</p>
        </LoanApplicationBodyCopy>
        <BaseButton
          data-test-id="logout-modal-exit"
          :label="data?.buttonLogout"
          variation="secondary"
          @click="handleExitClick"
        />
      </template>
    </BaseModal>
  </ClientOnly>
</template>
