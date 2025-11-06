import { DOMAINS } from '../const/DOMAINS';

export type TDomainsValues = (typeof DOMAINS)[keyof typeof DOMAINS];
