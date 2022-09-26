import { Routes } from '@/constants/pages';
import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware(async () => {
  // NOTE: Following validation will evaluate if the app is in the client side, since session composable uses cookies.
  if (!process.server) {
    const notification = useNotification();
    const session = useSession();
    const isLoggedIn = await session.isLoggedIn.value;

    if (!isLoggedIn) {
      // TODO: Add proper error source.
      notification.updateMessage('Please login to continue');

      // NOTE: Using location.href since the Okta widget doesn't render properly with Nuxt router.
      return (location.href = Routes.Login);
    }
  }
});
