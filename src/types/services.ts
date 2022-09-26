export interface BankComposite {
  bankName?: string;
  routingNumber?: string;
  checkingAccNumber?: string;
  isActive?: boolean;
  bankReferenceId?: string;
}

export interface IncomeSources {
  incomeSources?: BankComposite;
}

export interface UserData {
  pending: boolean;
  data?: IncomeSources;
  existingData: boolean;
}
