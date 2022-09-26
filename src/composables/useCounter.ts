type CounterProps = {
  state: {
    currentAmount: number;
    isIncrementBtnDisabled: boolean;
    isDecrementBtnDisabled: boolean;
  };
  handleIncrement: () => void;
  handleDecrement: () => void;
};

/**
 * Returns counter value, buttons disabled states, handleIncrement and handleDecrement function.
 * @param  {number} maximumEligibleAmount - till this amount increment will be allowed.
 * @param  {number} counter - handleIncrement/handleDecrement by counter
 * @return  {Object} - state with currentAmount, isIncrementBtnDisabled, isDecrementBtnDisabled, handleIncrement and handleDecrement function.
 */
export default function useCounter(
  maximumEligibleAmount: number,
  counter = 10
) {
  const state: CounterProps['state'] = reactive({
    currentAmount: maximumEligibleAmount,
    isIncrementBtnDisabled: computed(
      () => state.currentAmount >= maximumEligibleAmount
    ),
    isDecrementBtnDisabled: computed(() => state.currentAmount <= 0),
  });

  /**
   * TODO: Handle if remaining currentAmount value is greater than counter value
   * Suppose (currentAmount + counter) >= maximum eligible loan amount, (200 + 10) >= 205.
   */
  const handleIncrement = (): void => {
    state.currentAmount += counter;
  };

  /**
   * TODO: Handle if remaining currentAmount value is less than or equal to zero
   * Suppose (currentAmount - counter), (8 - 10).
   */
  const handleDecrement = (): void => {
    state.currentAmount -= counter;
  };

  return {
    state,
    handleIncrement,
    handleDecrement,
  };
}
