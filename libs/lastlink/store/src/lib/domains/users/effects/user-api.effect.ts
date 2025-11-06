import { inject, Injectable } from '@angular/core';
import { UserService } from '@lastlink/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersApiActions } from '../actions';

@Injectable()
export class UserEffects {
  // PRIVATES
  #actions = inject(Actions);
  #userService = inject(UserService);

  readUsers$ = createEffect(() =>
    this.#actions.pipe(
      ofType(UsersApiActions.readStart),
      switchMap(() =>
        this.#userService.read().pipe(
          map((users) => UsersApiActions.readDone({ users: users })),
          catchError((error) => of(UsersApiActions.readError({ error: error })))
        )
      )
    )
  );

  readIdUsers$ = createEffect(() =>
    this.#actions.pipe(
      ofType(UsersApiActions.readIdStart),
      switchMap((action) =>
        this.#userService.readId(action.id).pipe(
          map((users) => UsersApiActions.readIdDone({ user: users })),
          catchError((error) =>
            of(UsersApiActions.readIdError({ error: error }))
          )
        )
      )
    )
  );
}
