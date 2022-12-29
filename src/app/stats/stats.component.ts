import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travel.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private travelService:TravelService,public service:UserService) { }
  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  ngOnInit(): void {

    this.travelService.getStats().subscribe(res=>{
      this.Stat=res;
    
      console.log("ddd"+this.Stat.map(i=>i.total));
  });
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
