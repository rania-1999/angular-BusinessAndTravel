import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../entity/Employee';
import { Project } from '../entity/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectsUrl="http://localhost:8089/SpringMVC/project/retrieve-all-project";
  participationProject="http://localhost:8089/SpringMVC/project/retrieve-all-participations"
ListId:number[];
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  formModel = this.fb.group({
   
    nom: [''],
    description: [''],
    documents: [''],
    libelle: [''],
    budget: [''],
    dateDebut: [''],
    dateFin: [''],
    entreprise:['']
    
    
  });
  getProjects() : Observable<any> {
    return this.http.get<any>(this.projectsUrl);
    }
    retrieveProjectById(idProject: number)
{
  return this.http.get("http://localhost:8089/SpringMVC/project/retrieve-project/"+idProject);
}
  addProject(project:Project){
      return this.http.post<Project>("http://localhost:8089/SpringMVC/project/add-projects",project);
      }
      AssignProjectToEntreprise(project:Project,idEntreprise:number){
return this.http.post<Project>("http://localhost:8089/SpringMVC/project/add-project/"+idEntreprise,project);
      }
      deleteProjectById(id:number){
        return this.http.delete("http://localhost:8089/SpringMVC/project/remove-project/"+id);
        }
        editProject(project:Project){
          return this.http.put<Project>("http://localhost:8089/SpringMVC/project/modify-project/",project);
        }
        affectProjectToEmployee(idProject:number,idEmployee:number)
        {return this.http.post<Project>("http://localhost:8089/SpringMVC/project/assignProject/"+idProject+"/"+idEmployee,Project);

        }
        addPrime(idEmployee)
        {
          return this.http.post<Employee>("http://localhost:8089/SpringMVC/project/addPrime/"+idEmployee,Employee);
        }
        rejectProject(idProject)
        {
          return this.http.post<Project>("http://localhost:8089/SpringMVC/project/rejectProject/"+idProject,Project);
        }
        retrieveParticipations() : Observable<any> {
          return this.http.get<any>(this.participationProject);
          }
          downloadExcel()
          {
            return this.http.get("http://localhost:8089/SpringMVC/project/export/excel");
            
          }
          sendEmail(idEntreprise:number,idProject:number)
          {
            return  this.http.request("http://localhost:8089/SpringMVC/project/sendHtmlEmail/"+idEntreprise,"/"+idProject);
          }
          getStarEmployee()
          {
            return this.http.get<any>("http://localhost:8089/SpringMVC/project/retrieve-getEmployeeStar");
          }
          
        
      
     
}
