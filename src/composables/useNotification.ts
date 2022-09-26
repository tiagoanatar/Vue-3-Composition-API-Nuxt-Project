import { computed } from 'vue';
import { useCookie } from '#app';

// TODO: Composable added in order to communicate alert data between views, evaluate its removal.
export const useNotification = () => {
  const message = useCookie<string>('customMessage');
  const updateMessage = (newMessage: string): void => {
    message.value = newMessage;
  };

  const deleteMessage = (): void => updateMessage(null);

  return {
    message: computed(() => message.value),
    updateMessage,
    deleteMessage,
  };
};
