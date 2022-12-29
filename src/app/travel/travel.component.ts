import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { AddTravelComponent } from '../add-travel/add-travel.component';
import { TravelService } from '../shared/travel.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private service:TravelService,public dialog: MatDialog,public uService:UserService) { }

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  travels:any;
  ngOnInit(): void {

    this.service.getTravels().subscribe(
      res =>{
        this.travels = res;
        this.dtTrigger.next();
      },
      err =>{
        console.log(err);
      }

    );
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  openDialog() {
    const dref = this.dialog.open(AddTravelComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
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

}
