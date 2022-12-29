import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Quiz } from '../models/quiz';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
   quizs:any;
   dataSource:MatTableDataSource<Quiz>;
   @Input('cdkDragData') quiz:any;
  constructor(private quizService:QuizService, private Router: Router,public uService:UserService) { }
 
  ngOnInit(): void {
    this.quizService.getQuizList().subscribe(data =>{  
      this.quizs =data;  
      console.log(this.quizs);
      })  
      this.dataSource= new MatTableDataSource(this.quizs);
     
      console.log(this.dataSource);
  }
  deletequiz(id: number) {
    this.quizService.deleteQuiz(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        });
  }
  onSelect(quiz){
    this.Router.navigate(['/questions',quiz.idQuiz])
  }
  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container)
    {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )

    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
      console.log(event.container.data[event.currentIndex]);
      this.deletequiz(event.container.data[event.currentIndex]['idQuiz'])
      this.ngOnInit();
      
    }
  
 }
}
