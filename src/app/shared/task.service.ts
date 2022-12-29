import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../entity/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  projectsUrl="http://localhost:8089/SpringMVC/task/retrieve-all-task";

  constructor(private http:HttpClient) { }
  getTasks() : Observable<any> {
    return this.http.get<any>(this.projectsUrl);
    }
  addTask(task:Task,idProject:number){
      return this.http.post<Task>("http://localhost:8089/SpringMVC/task/add-assign-taskProject/"+idProject,task);
      }
      deleteTaskById(id:number){
        return this.http.delete("http://localhost:8089/SpringMVC/task/remove-task/"+id);
        }
assignTaskToEmployee(idTask:number,idEmployee:number)
{
  return this.http.post<Task>("http://localhost:8089/SpringMVC/task/assign-taskEmployee/"+idTask,"/"+idEmployee)
}
endTask(idTask:number)
{return this.http.put<Task>(" http://localhost:8089/SpringMVC/task/end-task/"+idTask,Task);
}
      consulterTask(id:number) 
     {
        return this.http.get(" http://localhost:8089/SpringMVC/task/retrieve-task/"+id)
}
retrieveTaskById(idTask: number)
{
  return this.http.get("http://localhost:8089/SpringMVC/task/retrieve-task/"+idTask);
}
}