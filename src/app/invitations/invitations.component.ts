import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvitationService } from '../shared/invitation.service';
import {Subject} from 'rxjs';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  constructor(private service:InvitationService,private snackbar:MatSnackBar,public uService:UserService) { }
  invitations;

 

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {

    this.getInvitations();

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  resendInvitation(id){
    this.service.ResendInvitation(id).subscribe(
      res =>{
        this.snackbar.open("Invitation sent!", "Ok");
        
      },
      err =>{
        
      }

    );
  }

  getInvitations(){
    this.service.getInvitations().subscribe(
      res =>{
        this.invitations = res;
        // initiate our data table
        this.dtTrigger.next();
      },
      err =>{
        console.log(err);
      }

    );
  }

  sendInvitationsExcel(){
    this.service.sendInvitationsExcel().subscribe(
      res =>{
        this.snackbar.open("Invitations sent!", "Ok");
        this.getInvitations();
        
      },
      err =>{
        
      }

    );
  }

  

}
