import { IGeo } from './IGeo';

export interface IAddress {
  street: string; // 'Kulas Light';
  suite: string; // 'Apt. 556';
  city: string; // 'Gwenborough';
  zipcode: string; // '92998-3874';
  geo: IGeo;
}
