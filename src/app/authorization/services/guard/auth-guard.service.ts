import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
) { }

  canActivate():
  Observable<boolean | UrlTree> |
  Promise<boolean | UrlTree> |
  boolean |
  UrlTree {
    return  this.authService.user
    .pipe(
        take(1),
        map(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        })
        //Old method of routhing be UrlTree 
        // ,
        // tap(isAuth => {
        //     if (!isAuth) {
        //         this.router.navigate(['/auth']);
        //     }
        // })
    );
}
}
