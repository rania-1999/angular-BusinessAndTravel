import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})


export class AddEventComponent implements OnInit {

  constructor(public service:EventService) { }

  ngOnInit(): void {

    
  }

  onSubmit(){
    this.service.addEvent().subscribe(
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
