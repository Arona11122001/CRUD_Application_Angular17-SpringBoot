import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee:Employee = new Employee();
 

  constructor(private employeeService : EmployeeService, private route : Router ) { }

  insertEmployee(){ 
    this.employeeService.createEmployee(this.employee).subscribe((data: any) => {
      this.goToList();
      console.log(data);
      this.employee = data as any;
    });
  }

 

  onSubmit(){
    this.insertEmployee();
    console.log(this.employee);
  }

  goToList(){
    this.route.navigate(['/employees']);
  }

}
