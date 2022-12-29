import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from '../shared/comment.service';
import { ImageService } from '../shared/image.service';
import { PostService } from '../shared/post.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-bestpost',
  templateUrl: './bestpost.component.html',
  styleUrls: ['./bestpost.component.css']
})
export class BestpostComponent implements OnInit {

  constructor(private service:PostService,public dialog: MatDialog,private uService:UserService,private imageService:ImageService,public cService:CommentService) { }
  posts:any;
  userDetails;
  dbImage: any; 
  comments;
  postResponse: any;
  ngOnInit(): void {

    this.service.bestlikes().subscribe(
      res =>{
        this.posts = res;
      },
      err =>{
        console.log(err);
      }

    );
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res,
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
  }
  addlikes(idPost,idClient){
    this.service.addLike(idPost,idClient).subscribe(
      (res: any) => {
        
          
          //this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
