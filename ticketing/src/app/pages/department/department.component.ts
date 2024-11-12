import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../shared/pipes/na.pipe';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    CommonModule,
    NaPipe,
    FormsModule
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{
  departmentList: Department[] = [];
  employeeList$: Observable<EmployeeModel[]> | undefined;
  departmentObj: Department = new Department();
  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.loadDepartment();
    this.loadEmployeeList();
  }

  loadDepartment(){
    this.departmentService.getAllDept().subscribe((res: APIResponse) => {
      this.departmentList = res.data;
    });
  }

  loadEmployeeList(){
    this.employeeList$ = this.employeeService.getEmployeeList();
  }

  onSaveDept(){
    this.departmentService.updateDept(this.departmentObj).subscribe((res: APIResponse) => {
      if(res.result){
        alert('Department Updated Successfully');
        this.departmentList = res.data;
      }
    });
  }

  onDeptEdit(deptObj: Department){
    this.departmentObj = deptObj
  }

  onDeptDelete(deptId: number){
    const confirmDelete = confirm('Are you sure you want to delete this department');
    if(confirmDelete){
      this.departmentService.deleteDept(deptId).subscribe((res: APIResponse) => {
        alert('Derpartment deleted successfully');
        this.loadDepartment();
      });
    }
  }

  onReset(){
    this.departmentObj = new Department();
  }

}
