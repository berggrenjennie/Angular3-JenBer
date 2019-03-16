import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { RouteGuardService as RouteGuard} from './route-guard.service'

// tilldelar "vägar" till de olika komponenterna
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard',
    component:DashBoardComponent,
    canActivate:[RouteGuard]
    },
  {path: 'singleuser/:user', component:SingleUserComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
