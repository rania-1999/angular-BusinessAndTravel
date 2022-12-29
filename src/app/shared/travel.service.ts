import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http: HttpClient,private fb:FormBuilder) { }

  readonly BaseURI = 'http://localhost:8089/SpringMVC';

  formModel = this.fb.group({
   
    DepVille: [''],
    DesVille: [''],
    NbIntervenant: [''],
    DateDep: [''],
    DateDest: [''],
    DateRetour: [''],
    Object: ['']
    
    
  });

  getTravels(){
    return this.http.get(this.BaseURI+ '/voyage/retrieve-all-voyages');
  }

  getStats(){
    return this.http.get(this.BaseURI+ '/voyage/statisticnbVoyageParticipation');
  }

  addTravel(){
    var body = {
      depVille: this.formModel.value.DepVille,
      desVille: this.formModel.value.DesVille,
      nbIntervenant: this.formModel.value.NbIntervenant,
      dateDep: this.formModel.value.DateDep,
      dateDest: this.formModel.value.DateDest,
      dateRetour: this.formModel.value.DateRetour,
      object: this.formModel.value.Object,
      
    };
    return this.http.post(this.BaseURI + '/voyage/add-voyage/' , body);
  


  }

  addParticipation(idVoyage,idParticipation){
    var body = {
      
      
    };
    return this.http.post(this.BaseURI + '/voyage/add-participation/' + idVoyage+'/' + idParticipation , body);
  


  }

  addVote(idVoyage,idEmployee,note){
    var body = {
      
      
    };
    return this.http.post(this.BaseURI + '/voyage/add-vote/' + idVoyage+'/' + idEmployee +'/' + note, body);
  


  }

  getTravelsById(id){
    return this.http.get(this.BaseURI+ '/voyage/retrieve-voyage/'+id);
  }

  getMoyenneTravels(id){
    return this.http.get(this.BaseURI+ '/voyage/getMoyenneNote/'+id);
  }
  
}
