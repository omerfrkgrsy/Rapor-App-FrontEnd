import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportViewModel } from '../models/ReportViewModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class RaporService {
  baseUrl="https://localhost:5001"

  constructor(
    private http:HttpClient
  ) { }
  getRapors():Observable<Object[]>{
   
    return this.http.get<Object[]>(this.baseUrl+'/Report/GetReport');
    }

}
