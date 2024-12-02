import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../constants/Constants';
import { APIResponse, NewTicket } from '../models/API.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  createNewTicket(newTicket: NewTicket): Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.BASE_URL + Constant.API_ENDPOINT.CREATE_NEW_TICKET, newTicket);
  }
}
