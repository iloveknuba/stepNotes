import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const authguardGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  if(userService.isAuthenticated()){
    if(route.routeConfig?.path == 'signup' || route.routeConfig?.path == 'signin'){
      router.navigate(['/notes'])
    }
    return true;
  }
  else {
    router.navigate(["/signin"])
    return false;
  }
};
