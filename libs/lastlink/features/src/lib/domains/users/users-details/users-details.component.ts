import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOMAINS, IUser, KEYS, TLoadingStatus } from '@lastlink/core';
import { CommonService, SnackBarService, UserService } from '@lastlink/shared';
import {
  selectSelectedUser,
  selectUsersError,
  selectUsersStatus,
  UsersApiActions,
} from '@lastlink/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'll-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDetailsComponent implements OnInit {
  // INJECTIONS
  #activatedRoute = inject(ActivatedRoute);
  #router = inject(Router);
  #snackBar = inject(SnackBarService);
  #store = inject(Store);

  // PROPS
  NO_INDEX = -1;
  KEYS = KEYS;

  // OBSERVABLES
  item$: Observable<IUser | null>;
  status$: Observable<TLoadingStatus>;
  error$: Observable<any>;

  // PRIVATES
  #id!: number | string;

  constructor() {
    this.item$ = this.#store.select(selectSelectedUser);
    this.status$ = this.#store.select(selectUsersStatus);
    this.error$ = this.#store.select(selectUsersError);

    this.error$.subscribe((value) => {
      if (value) this.#fallback('Users :: User not found [404]');
    });
  }

  // PRIVATES
  #fallback(message: string) {
    CommonService.log(message);
    this.#snackBar.open(KEYS.USER_404);
    this.#router.navigate(['/', DOMAINS.users, 'list']);
  }

  #initId() {
    const { snapshot } = this.#activatedRoute;
    const id = snapshot.paramMap.get('id');
    this.#id = id ? parseInt(id, 10) : this.NO_INDEX;
  }

  // LIFECYCLES
  ngOnInit() {
    this.#initId();
    this.#id
      ? this.#store.dispatch(UsersApiActions.readIdStart({ id: this.#id }))
      : this.#fallback('Users :: User not found [404]');
  }
}
