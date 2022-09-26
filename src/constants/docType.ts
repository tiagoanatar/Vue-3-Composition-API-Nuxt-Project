export enum DocType {
  OTHER = 'OTHER',
  BANK_ACCOUNT_STATEMENT = 'Bank Account Statement',
  PROOF_OF_INCOME = 'Proof of Income',
  GOVERNMENT_ID = 'Government ID',
  PROOF_OF_RESIDENCY = 'Proof of Residency',
}

export type DocTypeFile = `${DocType}`;

export const TYPE_FILES = [
  '.doc',
  '.docx',
  'application/msword',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/tif',
  'image/tiff',
  'text/plain',
];

export type TypeFilesUnion = typeof TYPE_FILES[number];
