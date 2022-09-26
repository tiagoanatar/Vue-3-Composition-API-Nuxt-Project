import { useCookie } from '#app';

type UserData = {
  zipCode: string;
};

export const useUserData = () => {
  const user = useCookie<UserData>('user');

  const updateUser = (data: UserData): void => {
    user.value = { ...user.value, ...data };
  };

  const deleteUser = (): void => {
    user.value = null;
  };

  return {
    deleteUser,
    updateUser,
    user: computed(() => user.value),
  };
};
