import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { ActivatedRoute, Route } from '@angular/router';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

// Componenten dashboard visas om användaren är inloggad, och visar upp en lista
// med användare som hämtas från json placeholder
export class DashBoardComponent implements OnInit {
  // Definerar datatyp och värde av userList, userNamn och userStatus
  userList : string[] = [];
  userListId : string[] = [];
  userNamn : string;
  userStatus : string

  // Userstatus sätts till värdet som finns i authService(localstorage)
  constructor(private authService:AuthService, private userService:UsersService)
  {
  this.userStatus = this.authService.checkIfLoggedIn();
   this.getUsers();
  }

  ngOnInit() {
  }

  // Funktionen hämtar listan med användare från userService, loppar igenom listan
  // för att hämta namn och id. därefter skrivs alla
  // användare ut på sidan när man är inloggad.
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (response) => {
          const userArray = [];
          for (let i = 0; i < response.length; i++){
            userArray.push({name:response[i].name, id:response[i].id});
          }
          this.userList = userArray;
        },
        (error) => console.log('error', error),
        ()=> console.log('completed')
    );
  }

  //UserNamn hämtas från inputfält och läggs till i arrayen userList
  addUserName(event):void{
    this.userNamn = event;
    this.userList.push(this.userNamn);
  }
  //funktionen tar bort sista namnet i userList när man klickar på knappen Remove
  removeUserName(event):void {
  this.userList.pop();
  }
}
