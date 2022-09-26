import { computed } from 'vue';
import { useState } from '#app';

export const useEnvironmentVariables = () => {
  const variables = useState('variables', () => null);

  const updateVariables = (serverVariables: {
    [key: string]: string;
  }): void => {
    if (!serverVariables) return;

    variables.value = serverVariables;
  };

  return {
    variables: computed(() => variables.value),
    updateVariables,
  };
};
