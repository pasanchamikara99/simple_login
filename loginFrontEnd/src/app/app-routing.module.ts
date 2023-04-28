import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexPageComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponentComponent
  },
  {
    path: 'addUser',
    component: SigninComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
