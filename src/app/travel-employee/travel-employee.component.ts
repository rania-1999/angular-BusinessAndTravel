import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travel-employee',
  templateUrl: './travel-employee.component.html',
  styleUrls: ['./travel-employee.component.css']
})
export class TravelEmployeeComponent implements OnInit {

  constructor(private service:TravelService,public dialog: MatDialog) { }

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  travels:any;
  moyenneVote;
  ngOnInit(): void {

    this.service.getTravels().subscribe(
      res =>{
        
        this.travels = res;
        this.dtTrigger.next();


        console.log("idv"+this.travels.idVoyage)
        
      },
      err =>{
        console.log(err);
      }

    );
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  

  Participate(idVoyage,idParticipation){
    this.service.addParticipation(idVoyage,idParticipation).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  Vote1(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  Vote2(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  Vote3(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  Vote4(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  Vote5(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

  getMoyenne(idVoyage){
    this.service.getMoyenneTravels(idVoyage).subscribe(
      result =>{
        this.moyenneVote = result;
      }
    );
    return this.moyenneVote;
  }
  

}
