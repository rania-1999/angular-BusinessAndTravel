import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-voir-plus-task',
  templateUrl: './voir-plus-task.component.html',
  styleUrls: ['./voir-plus-task.component.css']
})
export class VoirPlusTaskComponent implements OnInit {

  constructor(private router:Router,@Inject(MAT_DIALOG_DATA) public data: any,private service:TaskService , private dialog:MatDialog) { }
  task : any;
  idTask:number;
  ngOnInit() {
    this.idTask=this.data.idTask;
  
  this.service.retrieveTaskById(this.idTask).subscribe(res=>{console.log(res);
  
    this.task=res
  console});
  }
}
