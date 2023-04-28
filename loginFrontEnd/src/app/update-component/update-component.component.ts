import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {

  data:any
  status:any
  message:any

  constructor (
    private httpClient: HttpClient,
    private aroute: ActivatedRoute,
    private route:Router)
  {
    this.user=[] 
  }

  user:any;

  ngOnInit():void{
    this.aroute.params.subscribe(params => {
      const id = params['id'];
      this.getUser(id) 
    });
 
  }

  onSubmit(users:{name:String,gender:String,email:String,password:String}){

    const id = this.aroute.snapshot.paramMap.get('id');
    this.httpClient.put(`http://localhost:8084/updateUser/${id}`, users).subscribe((res : any) =>{
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
        alert("Update user successfull")
        this.route.navigate(['/index'])
      }
      else{
        alert("Something wrong")
      }
    })
   
  }



  getUser(id:any){
    this.httpClient.get('http://localhost:8084/getUser/'+id).subscribe((result:any)=>{
        this.user = result;
    })
  }

}
