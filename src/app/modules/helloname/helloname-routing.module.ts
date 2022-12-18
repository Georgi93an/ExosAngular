import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellonameComponent } from './helloname/helloname.component';

const routes: Routes = [
  {
    path:'helloname',
    component: HellonameComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HellonameRoutingModule { }
