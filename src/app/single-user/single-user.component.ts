import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

// Komponenten visar data när man klickat på enskild användare.

export class SingleUserComponent implements OnInit {
  user:object;
  userId:string;

// skriver ut vilken användare som man klickat på
  constructor(private route: ActivatedRoute, private userService:UsersService) {
    this.route.params.subscribe(params=> {
      this.userId = params.user;
      })
  }

  ngOnInit() {
    this.getUser();
  }
// Funktionen hämtar den enskilda användaren från userservice och skriver ut.
  getUser() {
    this.userService.getUser(this.userId)
      .subscribe(
        (response) => {
          this.user = response;
        },
        (error) => console.log('error', error),
        ()=> console.log('completed')
    );
  }

}
