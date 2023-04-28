import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {

  data:any
  status:any
  message:any

  constructor (
    private httpClient: HttpClient,
    private route:Router)
  {
    this.userList=[] 
  }

  userList:any;

  ngOnInit():void{
      this.getUserList()
  }

  delete(id:any){
    this.httpClient.delete('http://localhost:8084/deleteUser/'+id).subscribe((result:any)=>{
      this.data = result
      this.status = result.status;

      if(this.status == 200){
        alert("delete successfull")
      }else{
        alert("delete failed")
      }

    },(err:any)=>{
      this.data = err
      this.status = err.status;

      if(this.status == 200){
        alert("delete successfull")
        this.route.navigate(['/index'])
      }
      else{
        alert("delete failed")
      }
    })
  }

  addUser(){
    this.route.navigate(['addUser'])
  }

  update(id: any): void {
    this.route.navigate(['/update', id]);
  }


  getUserList(){
    this.httpClient.get('http://localhost:8084/getUsers').subscribe((result:any)=>{
        this.userList = result;
    })
  }

}
