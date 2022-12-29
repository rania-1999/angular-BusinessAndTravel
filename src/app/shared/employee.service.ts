import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../entity/Employee';
import { Entreprise } from '../entity/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EmployeesUrl="http://localhost:8089/SpringMVC/employee/retrieve-all-employees";
 
 
    constructor(private http:HttpClient) { }
    getEmployees() {
      return this.http.get(this.EmployeesUrl);
      }
      consulterEmployee(id:number) {
        
          return this.http.get("http://localhost:8089/SpringMVC/employee/retrieve-employee/"+id)
       }
       addPrime(idEmployee:number)
     {
       return this.http.post<Employee>("http://localhost:8089/SpringMVC/project/addPrime/"+idEmployee,Employee);
     }
}
