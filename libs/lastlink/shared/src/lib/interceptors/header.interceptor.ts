import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedReq = req.clone({
    setHeaders: {
      'X-App-Version': '1.0.0',
    },
  });
  return next(clonedReq);
};
