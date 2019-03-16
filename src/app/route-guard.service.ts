import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  authorized: boolean;

  // Hämtar från authService
  constructor(private authService: AuthService , public router: Router) {

  }

  // canActivate kontrollerar om användaren är inloggad och beroende på status från
  // authService så navigeras användaren till Login-sidan eller så returneras true
  // (att det finns en användare i localStorage)

  canActivate(): boolean {
    this.authorized=Boolean(this.authService.checkIfLoggedIn());
    if (!this.authorized) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
    this.router.navigate(['dashboard']);
  }

}
