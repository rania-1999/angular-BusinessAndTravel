import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:UserService) { }
  

  myParam;
  searchUsers;
  ngOnInit(): void {

    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=(res.get('name')),
        console.log('name='+this.myParam)
        this.service.searchByName(this.myParam).subscribe(
          res =>{
            this.searchUsers = res;
            console.log('usernametest',this.searchUsers);
            //localStorage.setItem('userSearch', JSON.stringify(this.searchUsers));
           // this.router.navigate(['/userSearch/'+name]);
            
          },
          err =>{
            console.log(err);
          }
    
        );
        });
    //this.userSearch =localStorage.getItem('userSearch');
    //this.userSearch=JSON.parse(localStorage.getItem('userSearch'))
  }

}
