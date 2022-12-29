import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css']
})
export class TravelDetailComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:TravelService,public snackbar: MatSnackBar) { }
  myParam;
  travel;
  moyenneVote;
  durationInSeconds = 5;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=Number(res.get('id')),
        this.service.getTravelsById(this.myParam).subscribe(
          result =>{
            this.travel = result
            this.getMoyenne(this.travel.idVoyage);
           
          },
          err =>{
            //console.log(err);
          }
    
        );
        });
        
  }

  Participate(idVoyage,idParticipation){
    this.service.addParticipation(idVoyage,idParticipation).subscribe(
      (res: any) => {

        this.snackbar.open("Your participation has been submitted", "Ok!",{
          duration: this.durationInSeconds * 1000,
        });
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
            this.snackbar.open("Participation Declined", "Ok!",{
              duration: this.durationInSeconds * 1000,
            });
          }
        
      
      
    );
  }

  moyenne;
  getMoyenne(idVoyage){
    this.service.getMoyenneTravels(idVoyage).subscribe(
      result =>{
        this.moyenne = result
        console.log(result);
        
      }
    )
    
  }

  Vote1(idVoyage,idEmployee,note){
    this.service.addVote(idVoyage,idEmployee,note).subscribe(
      (res: any) => {
        this.getMoyenne(idVoyage);
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
