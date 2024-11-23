import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginData = localStorage.getItem('loginData');
  console.log(route);
  console.log(state);
  if(loginData){
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;
  }
};
