import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudGetComponent } from './crud-get/crud-get.component';


const routes: Routes = [
  {
    path:'bussines/create',
    component:CrudAddComponent
  },
  {
    path: 'bussines/edit/:id',
    component:CrudEditComponent
  },
  {
    path:'bussines',
    component:CrudGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
