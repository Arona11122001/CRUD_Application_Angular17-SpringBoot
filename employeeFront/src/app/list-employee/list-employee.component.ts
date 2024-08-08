import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  employees: Employee[] = [
    
  ];

  constructor(private employeeService : EmployeeService, private router : Router ) { }

  ngOnInit(){
    this.getEmployees();
    }
  

  getEmployees(){
    this.employeeService.getEmployees().subscribe((data: any) => {
      console.log(data);
      this.employees = data as any[];
    });
  }

  updateEmployee(id: number){ 
    this.router.navigate(['update-employee', id]);
  }

  getEmployeeDetails(id: number){
    this.router.navigate(['view-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeById(id).subscribe((data: any) => {
      console.log(data);
      this.getEmployees();
    });
  }

  getEmployee(id: number){
    this.employeeService.getEmployeeById(id).subscribe((data: any) => {
      console.log(data);
    });
  }



}
