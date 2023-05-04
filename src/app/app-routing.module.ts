import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortComponent } from './main-port/main-port.component';

const routes: Routes = [
  {
    path: '',
    component:MainPortComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
