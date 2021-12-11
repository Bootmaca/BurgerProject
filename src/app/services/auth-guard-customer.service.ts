import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import {AuthServices} from "./auth.services";

@Injectable()
export class AuthGuardCustomerService implements CanActivate {
  constructor(private authService: AuthServices,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let utilisateur:any = sessionStorage.getItem("utilisateur");
    utilisateur = JSON.parse(utilisateur);
    if(utilisateur['typeUtil'] == "client") {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }


}
