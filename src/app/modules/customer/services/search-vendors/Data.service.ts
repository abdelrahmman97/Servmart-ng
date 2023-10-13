import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serprovider } from '../../Components/search-vendors/serprovider';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {
  private apiUrl = 'http://localhost:3000/api/data'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    console.log('Fetching vendors data...');

    return this.http.get<Serprovider[]>(this.apiUrl);
  }
}
