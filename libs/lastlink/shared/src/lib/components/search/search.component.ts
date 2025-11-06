import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { KEYS } from '@lastlink/core';
import { Subject, Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { CommonService } from '../../services';

@Component({
  selector: 'll-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent<T> implements OnInit, OnDestroy {
  // INPUTS
  @Input() items$!: Observable<T[]>;
  @Input() filterKey = '';
  @Input() placeHolder = KEYS.SEARCH_PLACEHOLDER;
  @Input() debounceTime = 333;

  // OUTPUTS
  @Output() filteredItems$ = new EventEmitter<Observable<T[]>>(true);

  // INJECTIONS
  #commonService = inject(CommonService);

  // PRIVATES
  #filterCollection = this.#commonService.filterCollection;
  #onDestroy$ = new Subject<void>();

  // PROPS
  searchControl = new FormControl('');

  // LIFECYCLE
  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        map((term) => (term || '').trim().toLowerCase()),
        switchMap((term) => {
          return this.items$.pipe(
            switchMap((items) => {
              return this.#filterCollection(items, term, this.filterKey);
            })
          );
        }),
        takeUntil(this.#onDestroy$)
      )
      .subscribe((filteredItems) => {
        this.filteredItems$.emit(of(filteredItems));
      });
  }

  ngOnDestroy() {
    this.#onDestroy$.next();
    this.#onDestroy$.complete();
  }
}
