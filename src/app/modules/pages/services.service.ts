import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from 'src/app/core/models/IService';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services = 'http://localhost:3000/Service';
 

  constructor(public http: HttpClient) 
  { }

  getServices(){
    return this.http.get<IService[]>(this.services);
  }
}
