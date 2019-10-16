import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'http://localhost:8085/person';

  constructor(private http: HttpClient) { }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPerson(employee: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}`, employee);
  }

  updatePerson(id: number, value: any): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPersonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
