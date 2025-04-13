// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasError: boolean = false;
  errorMessage: string = '';
  user: any;
  isAdmin: boolean= true;
  isDoctor: boolean = false;
  constructor(private authService: AuthService,
        private router:Router,
  ){ }
  // private docLink = '/doctors';
  // private adminLink ='/admins';
  // private adminLink ='/home';
  currentUser: string = '';
  ngOnInit(): void {
  }

  loginUser(oForm: NgForm): void{
    this.authService.loginUser(oForm.value).subscribe(
      (res)=>{
        if(res['status']== 'success'){
          this.authService.authToken = res['data']!['token'];
          this.authService.saveAuthToken();
          let savedToken = this.authService.getToken();
          this.authService.getCurrentUser(()=>{
            this.user = this.authService.user1;
            this.router.navigate(['/dashboard'])
          });
        } 
      },
      (err)=>{
        this.hasError = true;
        this.errorMessage= err.error.massage
      }
    );
  }
}
