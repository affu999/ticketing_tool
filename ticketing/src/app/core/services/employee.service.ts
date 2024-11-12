import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponse, EmployeeModel, LoginModel } from '../models/API.model';
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

  getAllEmployees(): Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.GET_EMPLOYEE);
  }

  getEmployeeList(): Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel>(environment.BASE_URL + Constant.API_ENDPOINT.GET_EMPLOYEE).pipe(
      map((res :any) => {
        return res.data;
      })
    );
  }
}