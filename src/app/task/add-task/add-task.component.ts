import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/entity/Task';
import { ProjectService } from 'src/app/shared/project.service';
import { TaskService } from 'src/app/shared/task.service';
import { TaskComponent } from '../task.component';
import { MatDatepickerInput } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  listProjects:any
  task : Task = new Task();
  submitted=false;
  idProject:number
    constructor(private router:Router,private service:TaskService, private serviceProject: ProjectService) { }
    addTask(){
      this.service.addTask(this.task,this.idProject).subscribe(data=>{console.log(this.task) 
      this.task=new Task()});
      };
    ngOnInit(): void {
      this.serviceProject.getProjects().subscribe(res=>{console.log(res);
        this.listProjects=res 
        console});
     this.task=new Task();
    
    }
    
  
}
