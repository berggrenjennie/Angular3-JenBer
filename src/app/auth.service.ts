import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser:string;

  public admins:AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor() {

  }

  // Användaren hämtas om det finns någon inloggad i localStorage
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }

  // Loginfunktionen hämtar användaren från OnSubmit som skickar med email och lösenord
  //och jämför med adminsobjektet.

  public login(Admin:AdminLogin){

    // loopar igenom objektet och jämför om email och password finns i objektet
    for (let i = 0; i < this.admins.length; i++) {
      if (Admin.email === this.admins[i].email && Admin.password === this.admins[i].password){
        localStorage.setItem('user', Admin.email);
        break;
      }
    }

    //this.loggedUser = user;
  }
  // Funktionen rensar localStorage och sätter loggedUsers värde till undefined
  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
