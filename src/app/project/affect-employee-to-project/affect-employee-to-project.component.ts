import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EmployeeService } from 'src/app/shared/employee.service';
import { Project } from 'src/app/entity/Project';
import { ProjectService } from 'src/app/shared/project.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-affect-employee-to-project',
  templateUrl: './affect-employee-to-project.component.html',
  styleUrls: ['./affect-employee-to-project.component.css']
})
export class AffectEmployeeToProjectComponent implements OnInit {
  project : Project = new Project();
  submitted=false;
  listEmployee : any;
  selectedEmployee:number;
  selectedProject:number
  listProject : any;
  idProject:number;
  constructor(private service:ProjectService,@Inject(MAT_DIALOG_DATA) public data: any, private employeeService:EmployeeService,public uService:UserService) { }
  AffectProjectToEmployee(idProject,selectedEmployee){
  
     this.service.affectProjectToEmployee(idProject,selectedEmployee).subscribe(data=>{console.log(this.project) 
     this.project=new Project()});
     this.ngOnInit;
    };
  ngOnInit(): void {
    this.idProject=this.data.idProject;
  
    this.service.retrieveProjectById(this.idProject).subscribe(res=>{console.log(res);
    
      this.listProject=res
    console});
   this.employeeService.getEmployees().subscribe(res=>{console.log(res);
    this.listEmployee=res 
    console});
   this.project=new Project();
   
  
  }
  

}
