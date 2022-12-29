import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'
import { Quiz } from '../models/quiz';
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:8089/SpringMVC';  

  constructor(private http:HttpClient) {
    
   }
   getQuizList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/Quiz/getallquizs');  
  }  
  createQuiz(Quiz: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/Quiz/addQuiz/4', Quiz);  
  }  
  deleteQuiz(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Quiz/deletequiz/${id}`, { responseType: 'text' });
  }
  makequiz(): Observable<Quiz> {  
    return this.http.get<Quiz>(`${this.baseUrl}/Quiz/makequiz/14`);  
  }
  getresult(Quiz: object,result:number): Observable<any> {  
    return this.http.post(`${this.baseUrl}/Quiz/result/2/${result}`,Quiz);  
  }    
}
