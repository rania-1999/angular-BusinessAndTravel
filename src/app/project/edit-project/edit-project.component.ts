import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Project } from 'src/app/entity/Project';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private router:Router,@Inject(MAT_DIALOG_DATA) public data: any,private service:ProjectService , private dialog:MatDialog) { }
  project :Project = new Project();
  list:any
  idProject:number;
  ngOnInit() {
    
  }
  edit(){
    this.idProject=this.data.idProject;
  
  this.service.editProject(this.project).subscribe(res=>{console.log(res);
    this.project=new Project()
    this.list=res
  console});
  }
}
