import { IconNames } from '@/constants/icons';

export type TransactionCardTypes =
  | 'default'
  | 'deferred'
  | 'late-fee'
  | 'origination'
  | 'paid'
  | 'postponed'
  | 'upcoming-deferral'
  | 'upcoming-payment';
type TransactionIconVariations = Record<
  TransactionCardTypes,
  { name: IconNames }
>;

export const transactionCardIconVariations: TransactionIconVariations = {
  default: {
    name: IconNames.Dollar,
  },
  deferred: {
    name: IconNames.Dollar,
  },
  'late-fee': {
    name: IconNames.Dollar,
  },
  origination: {
    name: IconNames.Dollar,
  },
  paid: {
    name: IconNames.Dollar,
  },
  postponed: {
    name: IconNames.Dollar,
  },
  'upcoming-deferral': {
    name: IconNames.Dollar,
  },
  'upcoming-payment': {
    name: IconNames.Repeat,
  },
};
