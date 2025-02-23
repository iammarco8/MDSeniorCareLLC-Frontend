import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

const FormValue = document.getElementById("signUpForm.value")
console.log(`${FormValue}`)

@Component({
  selector: 'app-second-middle',
  templateUrl: './second-middle.component.html',
  styleUrls: ['./second-middle.component.css']
})
export class SecondMiddleComponent {
 constructor(private dataservice:DataService){}
  form_1:any;
  form_2:any;
  wardID1:any;
  customerID1:any;
  // formValue:any = ;
  ngOnInit():void{

  }
  
  // this function will initiate both "createCustomer" and _THEN_ "createWard"
  createClient(oForm:NgForm){
    console.log(`${FormValue}`)
    // console.log("createClient is working")
    this.dataservice.createWard(oForm.value).subscribe(res=>{
      // console.log("createWard is fired")
      if(res['status']=='success'){
        console.log(`${JSON.stringify(res.dataWard!['ward'])}`)
        let wardID = res.dataWard!['ward']!['id']
        this.wardID1 = wardID
        // console.log("createWard was successful")
        this.dataservice.createCustomer(oForm.value).subscribe(res=>{
          // console.log("createCustomer was fired")
          // oForm.value.ward = wardID
          // console.log(`the "oForm.value.email" should be here`)
          // console.log(oForm.value.email)
          // console.log(oForm.value.ward)
          // console.log(`the "oForm.value.email" should be here`)
          if(res['status']=='success'){

            console.log(wardID)
            // console.log(`This is where the data should be`)

            console.log(`${JSON.stringify(this.wardID1)}`)
            Swal.fire({
              icon:'success',
              title:'We look Forward to your time with us'
            })
          }else{
            // console.log("createCustomer failed")
            Swal.fire({
              icon:'error',
              title:"Your data wasn't properly captured."
            })
          }
        })
      }else{
        // console.log("createWard failed")
        Swal.fire({
          icon:"error",
          title:"The data for your ward was not properly included. Please try again."
        })
      }
    })
  }

  createCustomer(oForm:NgForm){
    this.dataservice.createCustomer(oForm.value).subscribe(res=>{
      // change the class of the form to hidden 
      this.customerID1 = res.dataCustomer.custID
      const customerID = this.customerID1
      if(res['status']=='success'){
        // console.log(`${JSON.stringify(res.dataCustomer!['custID'])}`)
        // console.log(customerID)
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
  createWard(oForm:NgForm){
    this.dataservice.createWard(oForm.value).subscribe(res=>{
        if(res['status']=='success'){
        Swal.fire({
          icon:'success',
          title:'Sign Up successful'
        })
      }else{
        Swal.fire({
          icon:'error',
          title:'Please Check your information'
        })
      }
    })
  }

  displayChange(){
    let form_1 = this.form_1 = document.getElementById("wardApplicationForm");
    let form_2 = this.form_2 = document.getElementById("signUpForm");
    this.form_1.setAttribute("style","display:block;");
    this.form_2.setAttribute("style", "display:none;");
  }

  // there must be an 'if' conditional that can work here but {object}.hasOwn()
  // seems only to apply to a class in javaScrypt and no tin the css. this requires more work.
  displayReturn(){
    let form_1 = this.form_1 = document.getElementById("wardApplicationForm");
    let form_2 = this.form_2 = document.getElementById("signUpForm");
    this.form_1.setAttribute("style","display:none;");
    this.form_2.setAttribute("style", "display:block;");
  }

} 