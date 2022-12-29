import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpostsComponent } from '../addposts/addposts.component';
import { CommentService } from '../shared/comment.service';
import { ImageService } from '../shared/image.service';
import { PostService } from '../shared/post.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service:PostService,public dialog: MatDialog,public uService:UserService,private imageService:ImageService,public cService:CommentService) { }
  posts:any;
  userDetails;
  dbImage: any; 
  comments;
  postResponse: any;
  prop1 : string;
  ngOnInit(): void {
    this.service.getposts().subscribe(
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

  openDialog() {
    const dref = this.dialog.open(AddpostsComponent);
    
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(idPost,idClient){

    this.cService.addComment(idPost,idClient).subscribe(
      (res: any) => {
        
          
          this.service.formModel.reset();
          this.showComments();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );

  }

  showComments(){
    this.cService.getComment().subscribe(
      res =>{
        this.comments = res;
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
  deletepost(idPost){
    this.service.deletepost(idPost).subscribe(
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
 


}
