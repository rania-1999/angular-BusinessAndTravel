import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Project } from '../entity/Project';
import { ProjectService } from '../shared/project.service';
import { MatDialog } from '@angular/material/dialog';
import { AssignProjectToEntrepriseComponent } from './assign-project-to-entreprise/assign-project-to-entreprise.component';
import { AffectEmployeeToProjectComponent } from './affect-employee-to-project/affect-employee-to-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { GetStarEmployeeComponent } from './get-star-employee/get-star-employee.component';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  project : Project = new Project();
  submitted=false;
  listEmployee : any;
  selectedEmployee:number;
  selectedProject:number
  constructor(private router:Router,private service:ProjectService,private employeeService:EmployeeService,private dialog: MatDialog,public uService:UserService ) { }
  listProjects : any;
  AffectProjectToEmployee(idProject:number){
  
    this.service.affectProjectToEmployee(idProject,this.selectedEmployee).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
   }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res=>{console.log(res);
      this.listEmployee=res 
      console});
  this.service.getProjects().subscribe(res=>{console.log(res);
    this.listProjects=res
  console});
  }
  
  deleteproject(id:number)
  {
    this.service.deleteProjectById(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }
  downloadExcel(){
    this.service.downloadExcel().subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }
  openDialogEntreprise(){
    const dref = this.dialog.open(AssignProjectToEntrepriseComponent);
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEmployee(id:number){
    const dref = this.dialog.open(AffectEmployeeToProjectComponent,{data:{idProject:id}});
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit(id:number){
    const dref = this.dialog.open(EditProjectComponent,{data:{idProject:id}});
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
 
  openDialogSEmployee(){
    const dref = this.dialog.open(GetStarEmployeeComponent);
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
}
