import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  // INJECTIONS
  // #data = inject(MAT_SNACK_BAR_DATA);
  #snackBar = inject(MatSnackBar);

  // PRIVATES
  #snackBarOptions: MatSnackBarConfig<object> = {
    duration: 7_777,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  // PUBLICS
  open(
    message: string,
    action?: string | undefined,
    config?: MatSnackBarConfig<object> | undefined
  ) {
    this.#snackBar.open(message, action, {
      ...this.#snackBarOptions,
      ...config,
    });
  }
}
