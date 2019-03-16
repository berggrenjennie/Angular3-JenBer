import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

// Komponenten är till för att kunna lägga till och ta bort användare

export class EditUsersComponent implements OnInit {
  // skickar information till dash-board//
  @Output()addUser = new EventEmitter<string>();
  @Output()removeUser = new EventEmitter<string>();

  namn:string;

  constructor() {
  }

  ngOnInit() {
  }
  // Funktioner som hämtas vid klick på knapparna//
  onClick_userName() {
   this.addUser.emit(this.namn);
  }

  onClick_removeUser() {
    this.removeUser.emit();
   }
}
