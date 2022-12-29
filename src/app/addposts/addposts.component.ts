import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {

  constructor(public service:PostService,private userService:UserService) { }

  userDetails:any;
  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  onSubmit(id:any){
    this.service.addPost(id).subscribe(
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
