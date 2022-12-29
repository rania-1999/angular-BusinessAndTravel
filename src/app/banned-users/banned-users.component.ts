import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostService } from '../shared/post.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-banned-users',
  templateUrl: './banned-users.component.html',
  styleUrls: ['./banned-users.component.css']
})
export class BannedUsersComponent implements OnInit {

  constructor(public service:UserService,private pService:PostService) { }

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};

  travels:any;
  banned;
  ngOnInit(): void {
    this.service.getBannedUsers().subscribe(
      res =>{
        this.banned = res;
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
  onSubmit(){
    this.pService.sendEmailBanned().subscribe(
      res =>{
       
      },
      err =>{
        console.log(err);
      }

    );
  }

}


