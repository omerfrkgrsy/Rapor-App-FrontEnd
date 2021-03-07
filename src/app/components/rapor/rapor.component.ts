import { Component, OnInit } from '@angular/core';
import { ReportViewModel } from 'src/app/models/ReportViewModel';
import {Location} from '@angular/common';
import { RaporService } from 'src/app/services/rapor.service';
import { ReportModel } from 'src/app/models/RaporModel';
@Component({
  selector: 'rapor',
  templateUrl: './rapor.component.html',
  styleUrls: ['./rapor.component.css']
})
export class RaporCompenent implements OnInit {
  
  
  columns:String[];
  totals:{};
  items:Object[]=[];
  constructor(
  private  raporService:RaporService
  ) { }

  ngOnInit(): void {
    this.getReports();
    console.log("asdasd")
    console.log(this.items);
  }

  getReports():void{
    this.raporService.getRapors().subscribe((rapors)=>{
          console.log(rapors)
          this.items=rapors;
          this.columns=Object.keys(this.items[0]);
          var model={};
          this.columns.forEach(h=>{
            if(h!="İsYeriKodu"){
              model[h.toString()]=0;
            }
          })
          this.items.forEach(t=>{
            this.columns.forEach(x=>{
                if(t.hasOwnProperty(x.toString()))
                if(x!="İsYeriKodu"){
                  model[x.toString()]=model[x.toString()]+t[x.toString()];
                }
            })
            
          })
          this.totals=model;
          console.log(model)
          console.log(this.totals)
    });
   
  }

  
  
}
