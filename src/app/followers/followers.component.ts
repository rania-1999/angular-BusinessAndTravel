import { Component, OnInit } from '@angular/core';
import { Client } from '../models/Client';
import { ImageService } from '../shared/image.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private service:UserService,private imageService:ImageService,public uService:UserService) { }

  users;

  dbImage: any; 
  postResponse: any;
  successResponse: string;
  image: any;
  uploadedImage: File; 
  userDetails:Client;
  numbers:any;
  followers:any;
  ngOnInit(): void {

    this.service.getAllUser().subscribe(
      res =>{
        this.users = res;
        this.imageService.getImage(this.userDetails.imageName).subscribe(
          res =>{
            this.postResponse = res;          
                this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
          }
    
        );
      },
      err =>{
        console.log(err);
      }

    );
    this.getfollowers(15);
    this.getallfollowers();

    this.service.getUserProfile().subscribe(
      res =>{
        this.userDetails = res
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  getfollowers(id)
  {
    this.service.getIdFollowers(id).subscribe(
      res =>{
        this.numbers = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  unfollow(idUser){
    this.service.unfollow(idUser).subscribe(
      (res: any) => {
        this.ngOnInit();
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }
  getallfollowers(){
    this.service.getAllFollowers().subscribe(
      res =>{
        this.followers = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  

}
