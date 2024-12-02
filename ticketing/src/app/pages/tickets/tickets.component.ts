import { Component, ElementRef, ViewChild } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { map, Observable } from 'rxjs';
import { APIResponse, Department, NewTicket } from '../../core/models/API.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TicketsService } from '../../core/services/tickets.service';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  @ViewChild('newTicketModal') newTicketModal!: ElementRef<HTMLDivElement>;
  allDept$!: Observable<Department[]>
  newTicketForm: FormGroup;
  empId: any;
  constructor(
    private deptService: DepartmentService,
    private fb: FormBuilder,
    private ticketService: TicketsService
  ){
    this.newTicketForm = this.fb.group({
      severity: ['', Validators.required],
      deptId: ['', Validators.required],
      requestDetails: ['', Validators.required]
    });
  }
  ngOnInit(){
    this.empId = localStorage.getItem('loginData');
    this.empId = JSON.parse(this.empId);
    this.allDept$ = this.deptService.getAllDept().pipe(map((res: APIResponse) => {
      return res.data;
    }));
  }

  createNewTicket(){
    console.log(this.newTicketForm.value);
    if(this.newTicketForm.valid){
      this.ticketService.createNewTicket({
        ...this.newTicketForm.value,
        employeeId: this.empId.employeeId,
      }).subscribe((res: APIResponse) => {
        console.log(res.data);
        alert(res.message);
      })
      this.newTicketForm.reset();
    }else{
      alert('Enter Complete and Valid Details!');
    }
  }

  openNewTicketModal(){
    this.newTicketModal.nativeElement.style.display = 'block';
    this.newTicketModal.nativeElement.style.visibility = 'visible';
    this.newTicketModal.nativeElement.style.opacity = '1';
  }

  closeNewTicketModal(){
    this.newTicketModal.nativeElement.style.display = 'none';
    this.newTicketModal.nativeElement.style.visibility = 'hidden';
    this.newTicketModal.nativeElement.style.opacity = '0';
  }
}
