export interface APIResponse{
    message: string;
    result: string;
    data: any;
}

export class Department{
    deptId: number;
    deptName: string;
    deptHeadEmpId: number;
    deptHeadName: string;
    createdDate: Date;
    constructor(){
        this.deptId = 0;
        this.deptName = '';
        this.deptHeadName = '';
        this.deptHeadEmpId = 0;
        this.createdDate = new Date();
    }
}

export class LoginModel{
    userName: string;
    password: string;
    constructor(){
        this.userName = "";
        this.password = "";
    }
}

export class EmployeeModel {
    employeeId: number;
    employeeName: string;
    deptId: number;
    deptName: string;
    contactNo: string;
    emailId: string;
    role: string;

    constructor() {
        this.employeeId = 0
        this.employeeName = "";
        this.deptId = 0;
        this.deptName = "";
        this.contactNo = "";
        this.emailId = "";
        this.role = "";
    }
}

export interface NewTicket {
    employeeId: number;
    severity: string;
    deptId: number;
    state: string;
    requestDetails: string;
  }

export class Ticket{
    ticketId!: number;
    createdDate!: string;
    expectedEndDate!: string;
    state!: string;
    severity!: string;
    contactNo!: string;
    ticketNo!: string;
    deptName!: string;
    createdByEmployee!: string;
    assignedToEmployee!: string;
    completedDate!: null;
  }