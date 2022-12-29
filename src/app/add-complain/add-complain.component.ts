import { Component, OnInit } from '@angular/core';
import { Complain } from '../models/complain';
import { ComplainService } from '../shared/complain.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {

  constructor(private Complainservice:ComplainService,public snackbar:MatSnackBar,public router:Router) { }
  complain : Complain=new Complain(); 
  submitted = false;
  durationInSeconds = 5;   
  ngOnInit(): void {
    this.submitted=false;  
    this.complain=new Complain();
  }
  save() {
    this.Complainservice
    .createComplain(this.complain).subscribe(data => {
      console.log(this.complain)
      this.complain = new Complain();
      this.snackbar.open("complain added", "ok!",{
        duration: this.durationInSeconds * 1000,
      });
      this.router.navigateByUrl('/home');

      
    }, 
    error => console.log(error));
  }
    
  onSubmit() {
    //this.submitted = true;
    this.save();    
  }

 
  
 

}
