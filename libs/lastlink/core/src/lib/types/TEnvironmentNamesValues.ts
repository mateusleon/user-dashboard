import { ENVIRONMENT_NAMES } from '../const/ENVIRONMENT_NAMES';

export type TEnvironmentNamesValues =
  (typeof ENVIRONMENT_NAMES)[keyof typeof ENVIRONMENT_NAMES];
