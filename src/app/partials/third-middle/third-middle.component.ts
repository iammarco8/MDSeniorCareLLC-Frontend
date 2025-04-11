import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

const FormValue = document.getElementById("signUpForm.value")
console.log(`${FormValue}`)


@Component({
  selector: 'app-third-middle',
  templateUrl: './third-middle.component.html',
  styleUrls: ['./third-middle.component.css']
})
export class ThirdMiddleComponent {
  constructor(private dataservice:DataService){}
  ngOnInit():void{

  }
  createCustomer(oForm:NgForm){
    this.dataservice.createCustomer(oForm.value).subscribe(res=>{
        if(res['status']=='success'){
          Swal.fire({
            icon:'success',
            title:'Please Enter Your Ward.'
          })
        }else{
          Swal.fire({
            icon:'error',
            title:'Please check your information.'
          })
        }
    })
  }

  // force the capitalization of the names

}
