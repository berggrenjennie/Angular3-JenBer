import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminLogin } from '../models/admin-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Loginkomponenten hanterar möjligheten att skriva in uppgifter i fälten och
// bekräfta med loginknapp

export class LoginComponent implements OnInit {
  userStatus : string;

  model: AdminLogin = new AdminLogin('','');

  constructor(private authService: AuthService, private router: Router)
  {}

  ngOnInit() {
    this.checkUser();
  }
  //Skickar med modellen till authService Loginfunktionen!
  onSubmit():void {
    this.authService.login(this.model);
  }

  // logout-funktion som visas om det finns ett namn i localstorage och man klickar på login
  logout():void {
    this.authService.logout()
    this.checkUser();
  }
  // om det finns en användare i localstorage
  checkUser(){
    this.userStatus = this.authService.checkIfLoggedIn();
  }
}
