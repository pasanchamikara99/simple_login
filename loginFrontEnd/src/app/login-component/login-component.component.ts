import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  
  data:any
  status:any
  message:any

  title = 'AngularHttpRequest'

  constructor(
    private http :HttpClient,
    private route:Router
    ){
  }
 


  onSubmit(users:{email:String,password:String}){

    this.http.post('http://localhost:8084/login',users).subscribe((res : any) =>{
      this.data = res
      this.status = res.status;

      if(this.status == 200){
        this.route.navigate(['/index'])
      }else{
        this.message = res.message
      }

    },(err:any)=>{
      this.data = err
      this.status = err.status;

      if(this.status == 200){
        alert("Login successfull")
        this.route.navigate(['/index'])
      }else if(this.status === 400){ 
        alert("incorrect email or password")
      }
      else{
        alert("Invalid login")
      }
    })
   
  }

}
