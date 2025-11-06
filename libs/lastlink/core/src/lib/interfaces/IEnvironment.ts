import { TEnvironmentNamesKeys } from '../types/TEnvironmentNamesKeys';

export interface IEnvironment {
  '3rd': { [company: string]: { [service: string]: object } };
  name: TEnvironmentNamesKeys;
  api: { [api: string]: string };
}
