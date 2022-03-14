import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  baseUrl: any
  user = {}

  constructor(private http: HttpClient, private router:Router) { }

  userRegister(user:any){
    return this.http.post<any>(`${environment.baseUrl}/api/user/register`, user)
  }

  userLogin(user:any){
    return this.http.post<any>(`${environment.baseUrl}/api/user/login`, user)
  }
}
