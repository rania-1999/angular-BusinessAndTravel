import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../entity/Entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  EntreprisesUrl="http://localhost:8089/SpringMVC/entreprise/retrieve-all-entreprise";
  ListId:number[];
  entreprises:Entreprise[];
  entreprise= new Entreprise();
    constructor(private http:HttpClient) { }
    getEntreprises() {
      return this.http.get(this.EntreprisesUrl);
      }
      consulterEntreprise(id:number) {
        
          return this.http.get("http://localhost:8089/SpringMVC/entreprise/retrieve-entreprise/"+id)
       }
}
