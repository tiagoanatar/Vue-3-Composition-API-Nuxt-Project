import { Routes } from '@/constants/pages';
import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware(async () => {
  /**
   * NOTE: Following validation will evaluate if the app is in the client side,
   * since useUserData composable uses cookies.
   */
  if (!process.server) {
    const session = useSession();
    const router = useRouter();
    const isLoggedIn = await session.isLoggedIn.value;
    const currentRoute = router.currentRoute.value.path;
    const preAuthenticationUrls = [
      Routes.Register,
      Routes.Login,
      Routes.Landing,
      Routes.Zipcode,
    ];

    if (isLoggedIn && preAuthenticationUrls.includes(currentRoute)) {
      return router.push(Routes.Dashboard);
    }
  }
});
