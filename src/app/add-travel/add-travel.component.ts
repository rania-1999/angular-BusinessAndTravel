import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  constructor(public service:TravelService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addTravel().subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
