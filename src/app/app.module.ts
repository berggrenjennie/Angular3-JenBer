import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteGuardService } from './route-guard.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserListComponent,
    UserListItemComponent,
    EditUsersComponent,
    SingleUserComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
