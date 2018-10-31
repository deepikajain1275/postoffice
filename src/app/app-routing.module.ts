import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './ui/list/list.component';
import { AddshipmentComponent } from './ui/addshipment/addshipment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home', component: ListComponent, data: { isAdd: false }
  },
  {
    path: 'addshipmet', component: AddshipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
