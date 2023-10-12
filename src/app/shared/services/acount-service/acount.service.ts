import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/IUser';
@Injectable({
  providedIn: 'root'
})
export class AcountService {
  private personalInfo = 'http://localhost:3000/api/personalInfo'; 

constructor(private http:HttpClient) { }

getData(): Observable<IUser> {
  console.log('Fetching vendors data...');

  return this.http.get<IUser>(this.personalInfo);
} 
}
