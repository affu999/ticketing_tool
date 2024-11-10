import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse, LoginModel } from '../../core/models/API.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ){}

  onLogin(){
    this.employeeService.login(this.loginModel).subscribe((res: APIResponse) => {
      if(res.result){
        console.log(res.data);
        localStorage.setItem('loginData', JSON.stringify(res.data[0]));
        this.router.navigateByUrl('dashboard');
      }else{
        alert(res.message);
      }
    });
  }
}
