
// service connecting the backend

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // api connection variable
  // locally hosted Backend
  // private API_URL_cust = 'http://localhost:7890/api/MSeniorCareLLC/v1/'
  
  // Should be deleted before launch and upload
  private API_URL= 'http://192.168.100.81:7890/api/MDSeniorCareLLC/v1'

  constructor(private _http:HttpClient) { }

  // services function calls for 'customer' 
  createCustomer(data:any):Observable<any>{
    // return this._http.get<any>(this.API_URL + `/ward/${data}`)
    return this._http.post<any>(this.API_URL + `/customer`, data)
    .pipe(
      map((res)=>{
        return res
      })
    );
  }

  getSingleCustomer(id: number):Observable<any>{
    return this._http.get<any>(this.API_URL + `/customer/${id}` )
    .pipe( 
      map((res)=>{
        return res
      })
    )

  };

  updateCustomer(id:number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/customer/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  deleteCustomer(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL+`/customer/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

// full customer list may be included for user portals

  // Service function calls for 'ward'
  createWard(data:any):Observable<any>{
    return this._http.post<any>(this.API_URL + `/ward`, data)
    .pipe(
      map((res)=>{
        return res
      })
    );
  }

  getSingleWard(id: number):Observable<any>{
    return this._http.get<any>(this.API_URL + `/ward/${id}` )
    .pipe(
      map((res)=>{
        return res
      })
    )
  };

  updateWard(id:number, data: any):Observable<any>{
    return this._http.patch(this.API_URL + `/ward/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  deleteWard(id:number):Observable<any>{
    return this._http.delete<any>(this.API_URL+`/ward/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }
}