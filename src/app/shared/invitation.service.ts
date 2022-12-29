import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/SpringMVC';
  getInvitations(){
    return this.http.get(this.BaseURI+ '/Invitation/retrieveInvitations' );
  }
  ResendInvitation(id){
    return this.http.get(this.BaseURI+ '/Invitation/send-invitation/'+id );
  }

  sendInvitationsExcel(){
    return this.http.get(this.BaseURI+ '/Invitation/add-InvitationsExcel' );
  }

  acceptInvitation(id){
    return this.http.get(this.BaseURI+ '/Invitation/retrieve-invitation/'+id );
  }
}
