import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:UserService) { }

  userDetails;

  formModel = {
    email: '',
    
  }

  ngOnInit(): void {
  }

  sendEmail(email){

    this.service.forgotPassword(email).subscribe(
      res =>{
        
      },
      err =>{
        console.log(err);
      }

    );

  }

}
