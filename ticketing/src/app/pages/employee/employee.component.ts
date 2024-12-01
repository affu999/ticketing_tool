import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { map, Observable, pipe } from 'rxjs';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  allDept$!: Observable<Department[]>;
  allEmployees$!: Observable<EmployeeModel[]>;
  isEmpForm: boolean = false;
  empForm!: FormGroup;
  constructor(
    private deptService: DepartmentService,
    private empService: EmployeeService,
    private fb: FormBuilder
  ){ 
    this.empForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      empGender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dept: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

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

  resetEmpForm(){
    this.empForm.reset();
  }

  saveEmployee(){
    console.log(this.empForm.value);
    if(this.empForm.valid){
      alert('Employee Created Successfully!!!');
    }else{
      alert('Enter Valid Data!!!');
    }
  }

}
