import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ENVIRONMENT_APIS,
  IApiResponseBase,
  ICrudBaseService,
  TDomainsValues,
  TEnvironmentApisKeys,
} from '@lastlink/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudBaseService<I extends IApiResponseBase>
  implements ICrudBaseService<I>
{
  // ABSTRACTIONS
  abstract readonly api: TEnvironmentApisKeys;
  abstract readonly domain: TDomainsValues;

  // INJECTIONS
  #httpClient = inject(HttpClient);

  // PRIVATES
  #url(path?: number | string): string {
    path = path ? `/${path.toString()}` : '';
    const api = ENVIRONMENT_APIS[this.api];
    const destination = `${this.domain}${path}`;
    return new URL(destination, api).toString();
  }

  // PUBLICS
  create(data?: I, opts = {}): Observable<I> {
    return this.#httpClient.post<I>(this.#url(), { ...data }, { ...opts });
  }

  read(opts = {}): Observable<I[]> {
    return this.#httpClient.get<I[]>(this.#url(), { ...opts });
  }

  readId(pk: number | string, opts = {}): Observable<I> {
    return this.#httpClient.get<I>(this.#url(pk), {
      ...opts,
    });
  }

  update(pk: number | string, { ...data }: I, opts = {}): Observable<I> {
    return this.#httpClient.put<I>(this.#url(pk), data, {
      ...opts,
    });
  }

  updatePatch(
    pk: number | string,
    { ...data }: Partial<I>,
    opts = {}
  ): Observable<I> {
    return this.#httpClient.patch<I>(this.#url(pk), data, {
      ...opts,
    });
  }

  delete(pk: number | string, opts = {}): Observable<object> {
    return this.#httpClient.delete(this.#url(pk), {
      ...opts,
    });
  }
}
