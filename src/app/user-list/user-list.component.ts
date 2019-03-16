import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

// Komponenten visar hela listan av användare

export class UserListComponent implements OnInit {
  //Tar emot inputen users som en sträng från dashboard//
  @Input() users: string[];

  //definierar en boolean till värdet true från start//
  toggle_textColor: boolean =true;

  constructor() { }

  ngOnInit() { }

//funktion som togglar mellan true och false//
  toggleColor() {
    this.toggle_textColor = !this.toggle_textColor;
  }

}
