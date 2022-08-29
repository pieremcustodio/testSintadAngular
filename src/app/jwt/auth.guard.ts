import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){  
    const user = this.userService.userValue;
    if(user){
      return true;
    }
    this.router.navigate(['/'], {queryParams: { returnUrl: state.url}})
    return false;
  }
}
