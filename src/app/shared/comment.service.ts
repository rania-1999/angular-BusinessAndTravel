import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,private fb: FormBuilder) { }
  formModel = this.fb.group({
   
    
    Bb: ['', Validators.required]
    
    
  });
  readonly BaseURI = 'http://localhost:8089/SpringMVC';
  addComment(id:any,id2){
    var body = {
      
      body: this.formModel.value.Bb,
      
    };
    return this.http.post(this.BaseURI + '/comment/add-Comment/' + id+'/'+id2, body);
  


  }
  getComment(){
    return this.http.get(this.BaseURI+ '/comment/retrieve-Allcomments');
  }
}

