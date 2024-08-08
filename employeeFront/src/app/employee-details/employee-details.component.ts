import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  id: number=0;
  employee: Employee = new Employee();
  constructor(private employeeService : EmployeeService, private route : ActivatedRoute ) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data: any) => {
      console.log(data);
      this.employee = data as any;
    });
  }

}
