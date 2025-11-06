import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { CommonService } from '../services';

export const errorLoggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      CommonService.log(
        `[HTTP Error]: ${req.method} ${req.urlWithParams}`,
        `Status: ${error.status} - ${error.statusText}`,
        'Request Body:',
        req.body,
        'Error Response:',
        error.error
      );
      return throwError(() => error);
    })
  );
};
