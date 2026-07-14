import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authgoogle } from './authgoogle';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: Authgoogle = inject(Authgoogle);
  const router: Router = inject(Router);

  const loggedIn = loginService.getLoggedProfile();

  if (loggedIn) {
    return true;
  }
  router.navigate(['']);
  return false;
};
