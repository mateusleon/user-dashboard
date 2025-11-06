import { STORE_PHASES } from '../const';

export type TStorePhaseValues =
  (typeof STORE_PHASES)[keyof typeof STORE_PHASES];
