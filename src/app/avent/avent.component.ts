import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { AddEventComponent } from '../add-event/add-event.component';
import { EventService } from '../shared/event.service';
import { ImageService } from '../shared/image.service';
import { NoteService } from '../shared/note.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-avent',
  templateUrl: './avent.component.html',
  styleUrls: ['./avent.component.css']
})
export class AventComponent implements OnInit {

  constructor(private service:EventService,public dialog: MatDialog,private uService:UserService,private imageService:ImageService,public nService:NoteService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  events:any;
  userDetails;
  dbImage: any;
  notes; 
  postResponse: any;
  ngOnInit(): void {
    this.service.getEvents().subscribe(
      res =>{
        this.events = res;
        this.dtTrigger.next();
      },
      err =>{
        console.log(err);
      }

    );
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

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
