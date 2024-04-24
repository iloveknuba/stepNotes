import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const idToken = localStorage.getItem("auth_token");

  if (idToken) {
    const cloned = req.clone({
      headers: req.headers.set("x-access-token",
        idToken)
    });

    return next(cloned);
  }
  else {
    return next(req);
  }
};
