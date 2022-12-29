import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Entreprise } from 'src/app/entity/Entreprise';
import { Project } from 'src/app/entity/Project';
import { EntrepriseService } from 'src/app/shared/entreprise.service';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-assign-project-to-entreprise',
  templateUrl: './assign-project-to-entreprise.component.html',
  styleUrls: ['./assign-project-to-entreprise.component.css']
})
export class AssignProjectToEntrepriseComponent implements OnInit {
  project : Project = new Project();
  entreprise:Entreprise;
  submitted=false;
  listEntreprise : any;
  selectedEntreprise:number;
  constructor(private router:Router,private service:ProjectService, private serviceEntreprise:EntrepriseService,private _ngZone: NgZone) { }
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
  addAssignProject(){
  
     this.service.AssignProjectToEntreprise(this.project,this.selectedEntreprise).subscribe(data=>{console.log(this.project) 
    
      this.service.formModel.reset();
      this.project=new Project()});
     this.ngOnInit;
    };
  ngOnInit(): void {
   this.serviceEntreprise.getEntreprises().subscribe(res=>{console.log(res);
    this.listEntreprise=res 
    console});
   this.project=new Project();
   
  
  }
  

}
