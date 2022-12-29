import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TaskService } from '../shared/task.service';
import { AddTaskComponent } from './add-task/add-task.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { VoirPlusTaskComponent } from './voir-plus-task/voir-plus-task.component';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(iconRegistry: MatIconRegistry,  sanitizer: DomSanitizer,private router:Router,private service:TaskService , private dialog:MatDialog) { iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));}
  listTasks : any;
  
  ngOnInit(): void {
  
  this.service.getTasks().subscribe(res=>{console.log(res);
  
    this.listTasks=res
  console});
  }
  deleteTask(id:number)
  {
    this.service.deleteTaskById(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }
  
  openDialogTask(){
    const dref = this.dialog.open(AddTaskComponent);
     
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
 openDialogVoirPlus(id:number){
  const dref = this.dialog.open(VoirPlusTaskComponent,{data:{idTask:id}});
     
  dref.afterClosed().subscribe(result => {
    this.ngOnInit();
    console.log(`Dialog result: ${result}`);
  });
 }
}
