import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { map, Observable, pipe } from 'rxjs';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  allDept$!: Observable<Department[]>;
  allEmployees$!: Observable<EmployeeModel[]>;
  isEmpForm: boolean = false;
  constructor(
    private deptService: DepartmentService,
    private empService: EmployeeService
  ){}

  ngOnInit(): void {
    this.allDept$ = this.deptService.getAllDept().pipe(map((res: APIResponse) => {
      return res.data;
    }));

    this.allEmployees$ = this.empService.getAllEmployees().pipe(
      map((res: APIResponse) => {
        return res.data;
      })
    );
  }

}
