import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private service : UserService, private cookieService: CookieService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if ( this.cookieService.get('token') != null){
      let roles = next.data['permittedRoles'] as Array<string>;
     console.log(roles);
     // console.log(this.service.roleMatch(roles));
      if(roles){
        if (this.service.roleMatch(roles))
          return true;
        else{
          //this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      //this.router.navigate(['/entry/user/login']);
      return false;
    }

  }
  
}
