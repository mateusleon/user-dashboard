import { Observable } from 'rxjs';
import { IApiResponseBase } from './IApiResponseBase';

export interface ICrudBaseService<MODEL extends IApiResponseBase> {
  create(data: MODEL, opts?: object): Observable<MODEL>;
  read(opts?: object): Observable<MODEL[]>;
  readId(pk: number | string, opts?: object): Observable<MODEL>;
  update(pk: number | string, data: MODEL, opts?: object): Observable<MODEL>;
  updatePatch(
    pk: number | string,
    data: Partial<MODEL>,
    opts?: object
  ): Observable<MODEL>;
  delete(pk: number | string, opts?: object): Observable<object>;
}
