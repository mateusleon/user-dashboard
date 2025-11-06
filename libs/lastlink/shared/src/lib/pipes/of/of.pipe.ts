import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'of',
})
export class OfPipe implements PipeTransform {
  transform<T>(value: T): Observable<T> {
    return of<T>(value);
  }
}
