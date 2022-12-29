import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from '../add-event/add-event.component';
import { Subject } from 'rxjs';
import {EventService} from "../shared/event.service";
import { UserService } from '../shared/user.service';
import { NoteService } from '../shared/note.service';
import { ImageService } from '../shared/image.service';
import { CommentService } from '../shared/comment.service';
import {PageEvent} from '@angular/material/paginator';
import { ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
  
})
export class EventComponent implements OnInit {
  length = 100;
  pageSize = 10;
  encapsulation: ViewEncapsulation.None;

  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private service:EventService,public dialog: MatDialog,private uService:UserService,private imageService:ImageService,public nService:NoteService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  events:any;
  userDetails;
  dbImage: any;
  notes; 
  postResponse: any;
  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  ngOnInit(): void {
    this.service.getEvents().subscribe(
      res =>{
        this.events = res;
      },
      err =>{
        console.log(err);
      }

    );

    this.uService.getUserProfile().subscribe(
       res =>{
         this.userDetails = res,
         this.imageService.getImage(this.userDetails.imageName).subscribe(
          res =>{
             this.postResponse = res;          
                 this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
           }
    
         );
       },
       err =>{
         console.log(err);
       }

     );
    
  }
  openDialog() {
    const dref = this.dialog.open(AddEventComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }
  onSubmit(idEvenement,idClient){

    this.nService.addNote(idEvenement,idClient).subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          this.showNotes();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );

  }

  showNotes(){
    this.nService.getNote().subscribe(
      res =>{
        this.notes = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  deleteevent(idEvenement){
    this.service.deleteevent(idEvenement).subscribe(
      (res: any) => {
        this.ngOnInit();
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
