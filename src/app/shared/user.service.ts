import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private fb: FormBuilder,private cookieService: CookieService) { }

  readonly BaseURI = 'http://localhost:8089/SpringMVC';

  formModel = this.fb.group({
   
    Domain: [''],
    Email: ['', Validators.email],
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }),
    Birthday : ['', Validators.required],
    
  });

  

  register() {
    var body = {
      nom: this.formModel.value.Nom,
      email: this.formModel.value.Email,
      prenom: this.formModel.value.Prenom,
      password: this.formModel.value.Passwords.Password,
      dateNaissance: this.formModel.value.Birthday,
    };
    return this.http.post(this.BaseURI + '/client/register', body);
  }

  registerEmp(id) {
    var body = {
      nom: this.formModel.value.Nom,
      email: this.formModel.value.Email,
      prenom: this.formModel.value.Prenom,
      password: this.formModel.value.Passwords.Password,
      dateNaissance: this.formModel.value.Birthday,
    };
    return this.http.post(this.BaseURI + '/client/registerEmp/'+id, body);
  }



  login(formData:any) {
    return this.http.post(this.BaseURI + '/authenticate', formData);
  }

  roleMatch(allowedRoles:any): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(this.cookieService.get('token').split('.')[1]));
    var userRole = payLoad.role;
    //console.log(payLoad.role);
    allowedRoles.forEach((element: any) => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  getUserProfile(): Observable<Client>{
    
    return this.http.get<Client>(this.BaseURI+ '/client/profile');
  }

  forgotPassword(email){
    
    return this.http.get(this.BaseURI+ '/client/forgetPassword/'+ email);
  }

  changePassword(id) {
    var body = {
     
      password: this.formModel.value.Passwords.Password,
     
    };
    return this.http.put(this.BaseURI + '/client/updatePassword/'+id, body);
  }

  modifyDomain(id) {
    var body = {
     
      domain: this.formModel.value.Domain,
     
    };
    return this.http.put(this.BaseURI + '/client/updateDomain/'+id, body);
  }

  searchByName(name:string): Observable<Client[]>{
    return this.http.get<Client[]>(this.BaseURI+ '/client/retrieve-client-by-name/'+name);

  }

  searchByid(id:number): Observable<Client>{
    return this.http.get<Client>(this.BaseURI+ '/client/retrieve-client-by-id/'+id);

  }
  follow(id1,id2)
  {
    var body = {
      
      
    };
    return this.http.post(this.BaseURI + '/Follow/ajoutFollow/' + id1+ '/' +id2,body);
  }

  getAllUser(){
    
    return this.http.get(this.BaseURI+ '/client/retrieve-all-clients');
  }

  getIdFollowers(id:number){
    return this.http.get(this.BaseURI+ '/Follow/retrieve-ids/'+id);

  }

  unfollow(id){
    return this.http.delete(this.BaseURI+ '/Follow/remove-follow/' + id);
  }
  getAllFollowers(){
    return this.http.get(this.BaseURI+ '/Follow/retrieve-all');

  }

  getBannedUsers(){
    
    return this.http.get(this.BaseURI+ '/client/retrieve-banned');
  }
}
