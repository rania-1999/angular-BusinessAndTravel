import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvitationService } from '../shared/invitation.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  constructor(private service:InvitationService,private ac:ActivatedRoute,public uService:UserService,private toastr: ToastrService,public snackbar: MatSnackBar) { }

  myParam: number;

  invitation;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.acceptInvitation(this.myParam).subscribe(
          res=>this.invitation=res
          )});
  }

  onSubmit(id) {
    this.uService.registerEmp(id).subscribe(
      (res: any) => {
        if (res.status==200) {
          this.uService.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else  if (res.data=="Mail already exists") {
          
                this.toastr.error('Email is already taken','Registration failed.');
               
        } else {
            this.toastr.error(res.message,'Registration failed.');
            this.snackbar.open(res.message, "Registration failed");
            }
          });
        
      
    (      err: any) => {
        console.log(err);
      }
    
  }

}
