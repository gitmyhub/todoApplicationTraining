import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, // canActivate, RouteGuardService
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'todos', component: ListtodosComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
