import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  constructor(private router:Router,private service:EntrepriseService) { }
  listEntreprise : any;

  ngOnInit(): void {
    this.service.getEntreprises().subscribe(res=>{console.log(res);
  
      this.listEntreprise=res
    console});
  }

}
