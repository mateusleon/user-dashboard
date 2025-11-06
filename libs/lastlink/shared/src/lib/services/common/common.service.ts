import { Injectable } from '@angular/core';
import { isFalsey } from '@lastlink/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  /*
   *
   * @method isLoading(collection: unknown): boolean;
   *
   * @description Based on `(collection$ | async)` output, evaluate its value over false-y conditions.
   *
   * @return boolean.
   *
   */
  static isLoading(collection: unknown): boolean {
    return isFalsey(collection);
  }

  /*
   *
   * @method log([...params]): void;
   *
   * @description Wrapper to add DevOps, Analytics, to system logging.
   *
   * @return boolean.
   *
   */
  static log(...args: unknown[]) {
    // mleon(): adjust for SSG/SSR routines
    //          (console may not be available on NodeJs)
    console.log.apply(this, args);
  }

  filterCollection<T>(
    items: T[],
    term?: string,
    filterKey?: string
  ): Observable<T[]> {
    if (!term) return of(items);
    if (!items || !filterKey) return of([]);

    const filtered = items.filter((item) => {
      const value = (item as any)[filterKey];

      if (typeof value === 'string') {
        return value.toLowerCase().includes(term);
      }

      return false;
    });

    return of(filtered);
  }
}
