import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// Komponenten visar hela listan med användare

export class UserListItemComponent implements OnInit {
  //Tar emot inputen user som ett objekt//
  @Input()user: object;
  //Tar emot och sätter värde på inputen textColor från user-list//
  @Input()textColor:boolean;

  constructor() { }

  ngOnInit() { }

}
