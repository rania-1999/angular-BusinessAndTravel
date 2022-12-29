import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Quiz } from '../models/quiz';
import { interval } from 'rxjs';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  quizs:Quiz =new Quiz;
  result:any;
  public currentquestion:number=0;
  public point:number=0;
  public counter=60;
  correctAnswer:number=0;
  wrongAnswer:number=0;
  interval$:any;
  progress:string="0";
  isQuizCompeleted:boolean=false;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.makequiz().subscribe(data =>{  
      this.quizs =data;  
      console.log(this.quizs);
      console.log(typeof(this.quizs.questions));

      })  
      this.startCounter();
  }
  nextQuestion(){
    this.currentquestion++
  }
  previousQuestion(){
    this.currentquestion--
  }
  answer(currentQno:number,option:any)
  
  {
    if (currentQno === this.quizs.questions.length) {
      
      this.quizService.getresult(this.quizs,this.correctAnswer+1).subscribe(data =>{  
        this.result =data;  
        console.log(this.quizs);
        console.log(this.correctAnswer);
        console.log(this.result);
        })  
      this.isQuizCompeleted=true;
      this.stopCounter();
    }
    if(option.correct){
      this.currentquestion++;
      this.correctAnswer++;
      setTimeout(() => {
      this.restartCounter();
      this.getProgressPercent();
      }, 1000);
      this.point+=10;
    }else{
      this.wrongAnswer++;
      this.currentquestion++;
      setTimeout(() => {
      this.restartCounter();
      this.getProgressPercent();

      }, 1000);
     
    }
  }
  startCounter(){
    this.interval$=interval(1000).
    subscribe(val=>{this.counter--;
    if(this.counter===0){
      this.currentquestion++;
      this.counter=60;
    }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000)
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  restartCounter(){
    this.stopCounter;
    this.counter=60;
    this.startCounter();
  }
  restQuiz(){
    this.restartCounter();
    this.ngOnInit();
    this.point=0;
    this.counter=60;
    this.currentquestion=0;
    this.progress="0";
  }
  getProgressPercent(){
    this.progress=((this.currentquestion/this.quizs.questions.length)*100).toString();

  }
}
