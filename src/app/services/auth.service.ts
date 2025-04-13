import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://192.168.100.81:7890/api/MDSeniorCareLLC/v1/currentUser'
  
  private tokenKey = 'authToken';

  public authToken?:string;
  public user1?:any;
  constructor(private http: HttpClient) { }

  private _saveToStorage(key:string, value:any){
    localStorage.setItem(key, value);
  }

  saveAuthToken(
    // token:string
  ):void{
    this._saveToStorage( 
      this.tokenKey,
        this.authToken
      );
  }

  public isLoggedIn(): boolean{
    let token = localStorage.getItem(this.tokenKey) ;
    return token != null && token.length > 0;
  }

  public getToken():string | null{
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey)  : null;
  }

  loginUser(data:any):Observable<any>{
    return this.http.post<any>(this.API_URL + '/login', data)
    .pipe(
      map((res)=>{
        return res
      })
    );
  }    
  
  logoutUser(): void{
    localStorage.removeItem(this.tokenKey);
  }

  getUserProfileInformation(): Observable<any>{
    return this.http.get<any>(this.API_URL +'/userActive')
      .pipe(
        map((res)=>{
          return res
        })
      )
  }
  getCurrentUser(cb?: ()=> void){
    this.getUserProfileInformation().subscribe((res)=>{
      if (res['status']=== 'success'){
        this.user1 = res['data']!['user']; 
        if(cb){
          cb();
        }
      }
    })
  }
}