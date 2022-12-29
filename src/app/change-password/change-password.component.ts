import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private ac:ActivatedRoute,public service:UserService) { }

  myParam: number;
  userDetails;
  ngOnInit(): void {

    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );

    
  }
  onSubmit(){
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.changePassword(this.myParam).subscribe(
          
          )});
  }

}
