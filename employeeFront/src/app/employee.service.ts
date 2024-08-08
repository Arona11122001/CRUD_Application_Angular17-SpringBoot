import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient ) { }

  baseUrl: string = 'http://localhost:8080/employees';

  getEmployees(){
    return this.http.get(this.baseUrl);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.baseUrl, employee);
  }

  getEmployeeById(id: number){
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateEmployee(id : number, employee: Employee){
    return this.http.put(this.baseUrl + '/' + id, employee);
  }

  deleteEmployeeById(id: number){
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
