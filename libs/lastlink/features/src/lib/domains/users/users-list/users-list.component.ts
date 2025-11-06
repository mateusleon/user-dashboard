import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { IUser, KEYS, TLoadingStatus } from '@lastlink/core';
import {
  selectAllUsers,
  selectUsersError,
  selectUsersStatus,
  UsersApiActions,
} from '@lastlink/store';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'll-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  // INJECTIONS
  #store = inject(Store);

  // PROPS
  K = KEYS;
  searchFilterKey = 'name';
  searchDebounceTime = 333;

  // SUBJECTS
  onDestroy$: Subject<void> = new Subject();

  // OBSERVABLES
  filteredItems$: Observable<IUser[]>;
  items$: Observable<IUser[]>;
  status$: Observable<TLoadingStatus>;
  error$: Observable<any>;

  constructor() {
    this.filteredItems$ = this.#store.select(selectAllUsers);
    this.items$ = this.#store.select(selectAllUsers);
    this.status$ = this.#store.select(selectUsersStatus);
    this.error$ = this.#store.select(selectUsersError);
  }

  // LIFECYCLE
  ngOnInit() {
    this.#store.dispatch(UsersApiActions.readStart());
  }

  // PUBLICS
  onFilteredItems($event: Observable<IUser[]>) {
    console.log($event);
    this.filteredItems$ = $event;
  }
}
