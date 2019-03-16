import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
​
@Injectable({
 providedIn: 'root'
})

// Service som hanterar användare som hämtas från jsonplaceholder

export class UsersService {
 urls: any = {
  users: 'https://jsonplaceholder.typicode.com/users'
 }
 constructor(private http: HttpClient) { }

// hämtar specifik användare utifrån id när man klickat på den i userlist
 public getUser(id): Observable<any> {
  return this.http.get(this.urls.users + "/" + id)
}

// hämtar listan med användare från jsonplaceholder
  public getUsers(): Observable<any> {
   return this.http.get(this.urls.users)
  }
}
