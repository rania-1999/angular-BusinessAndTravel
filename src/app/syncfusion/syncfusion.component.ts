import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions,  DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/angular'; // useful for typechecking
import { dataBinding } from '@syncfusion/ej2-angular-schedule';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from '../entity/Project';
import { Task } from '../entity/Task';
import { TaskService } from '../shared/task.service';
import { UserService } from '../shared/user.service';
import { AddTaskComponent } from '../task/add-task/add-task.component';

@Component({
  selector: 'app-syncfusion',
  
  templateUrl: './syncfusion.component.html',
  
  styleUrls: ['./syncfusion.component.css'],
  

})
export class SyncfusionComponent{
constructor(private taskService:TaskService, private dialog:MatDialog,public uService:UserService){}

  task :Task= new Task() ;
  


events:any=[]
/*=[
  {nom:this.task.getNom, date:this.task.dateTask,color:'#0000FF'}
];*/
couleur:any=[]
nom:any=[];
datef:any=[];
ngOnInit(): void {
  
  this.taskService.getTasks().subscribe(data => {
    this.events = data;
    console.log(this.events);
   /* this.events=this.events.forEach(userObj => {
      userObj.color = '#0000FF';
  });*/
 this.events.forEach(u => {u.title=u.nom,u.date=u.dateTask, u.color = '#0000FF'});
console.log(this.events)
    this.calendarOptions={initialView: 'dayGridMonth',events:this.events}
    console.log(this.calendarOptions)

    /*for (var value of this.events) {
      this.events=[{date:value.dateTask,title:value.nom,color:'#0000FF'}]
      console.log(value.dateTask);
    }
    console.log(this.nom)
      console.log(this.events)
   
      this.calendarOptions={initialView: 'dayGridMonth',events:[{date:value.dateTask,title:value.nom,color:'#0000FF'}]}
      console.log(this.calendarOptions)*/
 });
  }

  calendarOptions: CalendarOptions = {
    //initialView: 'dayGridMonth', events:this.events,
  };

   
  openDialogTask(){
    const dref = this.dialog.open(AddTaskComponent);
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
 
}


