import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin-component.component.html',
  styleUrls: ['./signin-component.component.css']
})
export class SigninComponentComponent {

  data:any
  status:any
  message:any

  title = 'AngularHttpRequest'

  constructor(
    private http :HttpClient,
    private route:Router
    ){
  }
 


  onSubmit(users:{name:String,gender:String,email:String,password:String,password2:String}){


    if(users.password !== users.password2){
        alert("Password mismatch")
        console.log(users.password)
        console.log(users.password2)
        return
    }


    this.http.post('http://localhost:8084/addUser',users).subscribe((res : any) =>{
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
        alert("Add user successfull")
        this.route.navigate(['/index'])
      }
      else{
        alert("Something wrong")
      }
    })
   
  }

}
