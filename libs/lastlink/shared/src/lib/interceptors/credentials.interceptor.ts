import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Este interceptor adiciona 'withCredentials: true' a todas as requisições.
 * Essencial para enviar cookies de autenticação (como sessions) ao backend.
 */
export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  // Clona a requisição original e define withCredentials
  const clonedReq = req.clone({
    withCredentials: true,
  });

  // Passa a requisição clonada para o próximo handler
  return next(clonedReq);
};
