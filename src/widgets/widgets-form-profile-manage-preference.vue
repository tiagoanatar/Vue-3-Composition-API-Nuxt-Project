<script setup lang="ts">
import { Routes } from '@/constants/pages';
import { usePreferencesValidations } from '@/composables/schemas/useSchemas';

const { putPreferencesData, getPreferencesData } = useComposite();
const { getPreferenceData } = useContentful();
const { data, pending } = getPreferenceData(
  'widget-preference-profile-manage-preference'
);
const preferenceData = reactive({});
const id = 'formNotificationPreferences';
const schema = usePreferencesValidations();

const isLoading = ref(pending);

const handleSubmit = async (payload) => {
  const saveData = await putPreferencesData(Routes.ProfileMenu);
  saveData(payload);
};

onMounted(async () => {
  const { data } = await getPreferencesData();
  preferenceData.value = data;
  isLoading.value = false;
});
</script>

<template>
  <BaseForm
    :id="id"
    :data-test-id="id"
    :schema="schema"
    :submit="handleSubmit"
    hide-submit
  >
    <div class="theme-widget-notification-preferences-wrapper">
      <NotificationPreference
        v-for="(preference, index) in pending ? [1, 2] : data?.preferences"
        :id="preference?.input?.value || ''"
        :key="preference?.title"
        :copy="preference?.copy || ''"
        :data-test-id="`notification-preference-${index}`"
        :is-loading="isLoading"
        :title="preference?.title || ''"
        :is-selected="
          preferenceData?.value?.[preference?.input?.value] || false
        "
      ></NotificationPreference>
    </div>
  </BaseForm>
</template>
