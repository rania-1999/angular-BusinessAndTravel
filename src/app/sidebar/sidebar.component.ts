import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router:Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  onLogout() {
    //localStorage.removeItem('token');
    this.cookieService.delete("token", '/');
    
    
    this.router.navigate(['/user/login']);
    
    // var v = document.getElementById('admin');
     //  var v2 = document.getElementById('admin2');
      // v.style.visibility = 'hidden';
   // v2.style.visibility = 'hidden';
    // var f = document.getElementById('loginBtn');
       //f.style.visibility = 'hidden';
  }

}
