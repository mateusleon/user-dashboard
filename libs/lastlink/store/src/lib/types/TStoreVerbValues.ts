import { STORE_VERBS } from '../const';

export type TStoreVerbValues = (typeof STORE_VERBS)[keyof typeof STORE_VERBS];
