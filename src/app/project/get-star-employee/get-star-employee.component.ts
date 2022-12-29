import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/entity/Employee';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-get-star-employee',
  templateUrl: './get-star-employee.component.html',
  styleUrls: ['./get-star-employee.component.css']
})
export class GetStarEmployeeComponent implements OnInit {

  constructor(private service:ProjectService,private dialog: MatDialog) { }
  listEmployee:any;
  ngOnInit(): void {
    this.service.getStarEmployee().subscribe(res=>{console.log(res);
      this.listEmployee=res 
      console});
  }
}
