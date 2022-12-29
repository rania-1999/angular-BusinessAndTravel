import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { QuizService } from '../shared/quiz.service';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  constructor(private quizservice:QuizService,private router:Router,public uService:UserService) { }
  quiz:Quiz=new Quiz();
  ngOnInit(): void {
    this.quiz=new Quiz();
  }
  save() {
    this.quizservice
    .createQuiz(this.quiz).subscribe(data => {
      console.log(this.quiz)
      this.router.navigateByUrl('/quizlist');
     
      
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save();    
  }
}
