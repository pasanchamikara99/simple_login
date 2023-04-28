import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component'


const appRoute:Routes = [
{path:'',component:LoginComponentComponent},
{path:'index',component:IndexPageComponent},
{path:'addUser',component:SigninComponentComponent},
{path:'update/:id',component:UpdateComponentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginComponentComponent,
    SigninComponentComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
