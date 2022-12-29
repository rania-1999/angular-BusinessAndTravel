import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-chose-domain',
  templateUrl: './chose-domain.component.html',
  styleUrls: ['./chose-domain.component.css']
})
export class ChoseDomainComponent implements OnInit {

  constructor(public service:UserService) { }
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
    this.service.modifyDomain(this.userDetails.idClient).subscribe(
          
      )
  }

}
