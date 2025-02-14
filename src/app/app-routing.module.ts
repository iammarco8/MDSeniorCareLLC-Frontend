import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './partials/middle/middle.component';


const routes: Routes = [
  {path:'home', title:'Home', component:MiddleComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
