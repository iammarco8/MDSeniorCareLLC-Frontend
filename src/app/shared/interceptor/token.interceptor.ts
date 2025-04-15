import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    private router:Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.isLoggedIn()){
      console.log(`the interceptor is not working as intended`)
      let newRequest = request.clone({
        setHeaders:{
          Authorization:`Bearer ${this.authService.getToken()}`
        }
      });

      return next.handle(newRequest);
    }else{
      this.authService.logoutUser 
      this.router.navigate(['/login'])
    }
    return next.handle(request);
  }
}
