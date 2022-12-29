import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-download-excel',
  templateUrl: './download-excel.component.html',
  styleUrls: ['./download-excel.component.css']
})
export class DownloadExcelComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.downloadExcel().subscribe(res=>{console.log(res);});
  }

}
