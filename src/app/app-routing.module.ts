import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './partials/middle/middle.component';
import { SecondMiddleComponent } from './partials/second-middle/second-middle.component';
import { ThirdMiddleComponent } from './partials/third-middle/third-middle.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './partials/login/login.component';
import { LogoutComponent } from './partials/logout/logout.component';


const routes: Routes = [
  {path:'', title:'Home', component:MiddleComponent,pathMatch:'full'},
  {path:'secondDraft', title:'SecondDraft', component:SecondMiddleComponent,pathMatch:'full'},
  {path:'thirdDraft', title:'ThirdDraft', component:ThirdMiddleComponent,pathMatch:'full'},
  {path:'login', title:'LoginPage', component:LoginComponent, pathMatch:'full'},
  {path:'dashboard', title:'Dashboard', component:DashboardComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'logout', component:LogoutComponent, pathMatch:'full'},
  {path:'**', component:MiddleComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
