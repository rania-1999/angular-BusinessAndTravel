import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { faB } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';
  formModel = this.fb.group({
   
    NomEvenement: [''],
    Domain: [''],
    Type: [''],
    Description: [''],
    Localisation: [''],
    DatedebEvenement: [''],
    DatefinEvenement: ['']
    
    
  });
  getEvents(){
    return this.http.get(this.BaseURI+ '/evenement/retrieve-all-evenements');
  }
  addEvent(){
    var body = {
      nomEvenement: this.formModel.value.NomEvenement,
      domain: this.formModel.value.Domain,
      type: this.formModel.value.Type,
      description: this.formModel.value.Description,
      localisation: this.formModel.value.Localisation,
      datedebEvenement: this.formModel.value.DatedebEvenement,
      datefinEvenement: this.formModel.value.DatefinEvenement,
      
    };
    return this.http.post(this.BaseURI + '/evenement/add-evenement/' , body);
  


  }
  getMoyennes(id){
    return this.http.get(this.BaseURI+ '/reaction/getMoyenneReaction/' + id);
  }
  deleteevent(id){
    return this.http.delete(this.BaseURI+ '/evenement/remove-evenement/' + id);
  }
}
