import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constants';
import { APIResponse, Department } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDept(): Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.GET_DEPARTMENT);
  }

  createNewDept(data: Department): Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.GET_DEPARTMENT, data);
  }

  updateDept(data: Department): Observable<APIResponse>{
    return this.http.put<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.GET_DEPARTMENT, data);
  }

  deleteDept(id: number): Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.GET_DEPARTMENT + id);
  }

}
