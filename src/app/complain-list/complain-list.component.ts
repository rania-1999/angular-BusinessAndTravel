import { Component, OnInit,ViewChild,ChangeDetectorRef  } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ComplainService } from '../shared/complain.service';    
import { Observable } from "rxjs";  
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Complain } from '../models/complain';  
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent {
  public complains: any;
  private paginator: MatPaginator;
private sort: MatSort;
@ViewChild(MatSort, {
  static: false
}) set matSort(ms: MatSort) {
  this.sort = ms;
  this.setPaginationAndSort();
}
@ViewChild(MatPaginator, {
  static: false
}) set matPaginator(
  mp: MatPaginator
) {
  this.paginator = mp;
  this.setPaginationAndSort();
}
  displayedColumns: string[] = ['ID', 'Employee complain', 'operations' ];
  dataSource: any = new MatTableDataSource([]);;
  constructor(private complainservice:ComplainService,public uService:UserService) { }
  complain : Complain=new Complain();
  ngOnInit(): void {
    this.getCertification()
  }

  getCertification() {
    this.complainservice.getComplainList().subscribe(
      dataSource => {
        this.dataSource = new MatTableDataSource(dataSource);
        this.setPaginationAndSort()
        console.log(this.dataSource);
      }
    )
  }
  setPaginationAndSort() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deletecomplain(id: number) {
    this.complainservice.deleteComplain(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        });
  }
  
}
