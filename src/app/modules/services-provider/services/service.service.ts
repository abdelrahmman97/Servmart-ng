import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginationResponse } from '../../pages/services/interfaces/PaginationResponse';

@Injectable()
export class ServiceService {

private apiUrl = 'https://localhost:7013/api/Service/file';
private apiUrl2 = 'https://localhost:7013/api/Service/cat';

constructor(private http: HttpClient) { }
getValues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2).pipe(
      map(response => response['$values'])
    );
  }
uploadFormData(formData: FormData) {
  return this.http.post<any>(`${this.apiUrl}`, formData);
}
private apiUrl3 = 'https://localhost:7013/api/Service/search';

  
  getItems(
    name:string,
    categoryName:string,
    expectedSalary: number,
    orderBy: string,
    isAscending: boolean,
    pageSize: number,
    pageIndex: number
  ): Observable<PaginationResponse> {
    const params = {
      Name:name.toString(),
      categoryName:categoryName.toString(),
      ExpectedSalary: expectedSalary.toString(),
      OrderBy: orderBy,
      IsAscending: isAscending.toString(),
      PageSize: pageSize.toString(),
      PageIndex: pageIndex.toString()
    };

    return this.http.get<PaginationResponse>(this.apiUrl3, { params });
  }
}
