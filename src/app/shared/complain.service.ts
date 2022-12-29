import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Complain } from '../models/complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  private baseUrl = 'http://localhost:8089/SpringMVC';  
  constructor(private http:HttpClient) {

    
   }
   getComplainList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/complains/getallcomplains');  
  }  
  
  createComplain(Complain: Complain
    
    
    
    
    
    ): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/complains/addcomplain/4', Complain);  
  }  
  updateComplain(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteComplain(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/complains/deletecomplains/${id}`, { responseType: 'text' });
  }

  
}
