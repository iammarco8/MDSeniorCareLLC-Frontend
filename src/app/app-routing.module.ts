import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './partials/middle/middle.component';
import { SecondMiddleComponent } from './partials/second-middle/second-middle.component';


const routes: Routes = [
  {path:'', title:'Home', component:MiddleComponent,pathMatch:'full'},
  {path:'secondDraft', title:'SecondDraft', component:SecondMiddleComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
