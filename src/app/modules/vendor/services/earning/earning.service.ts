import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root' 
})
export class EarningService {

  private apiUrl = 'http://localhost:3000/api/paymentList'; 
  private dayurl = 'http://localhost:3000/api/day'; 
  private monthyurl = 'http://localhost:3000/api/month'; 
  private waiturl = 'http://localhost:3000/api/wait'; 
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    console.log('Fetching vendors data...');
 
    return this.http.get<any[]>(this.apiUrl);
  } 
  getday():Observable<number> {
    return this.http.get<number>(this.dayurl);
  }

  getmonth():Observable<number> {
    return this.http.get<number>(this.monthyurl);
  }
  getwait():Observable<number> {
    return this.http.get<number>(this.waiturl);
  }
}
