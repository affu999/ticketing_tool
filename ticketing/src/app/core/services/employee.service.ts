import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, LoginModel } from '../models/API.model';
import { Constant } from '../constants/Constants';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(data: LoginModel): Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.LOGIN, data);
  }
}