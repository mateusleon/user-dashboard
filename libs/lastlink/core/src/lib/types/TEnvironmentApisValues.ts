import { ENVIRONMENT_APIS } from '../const/ENVIRONMENT_APIS';

export type TEnvironmentApisValues =
  (typeof ENVIRONMENT_APIS)[keyof typeof ENVIRONMENT_APIS];
