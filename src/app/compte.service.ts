import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Compte } from './compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseURL ="http://localhost:8080/api/v1/comptes"

  constructor(private httpClient: HttpClient) { }

  getComptesList(): Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(`${this.baseURL}`);
  }
  createCompte(compte: Compte): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,compte);
  }
  getCompteById(id: number): Observable<Compte>{
    return this.httpClient.get<Compte>(`${this.baseURL}/${id}`);
  }
  updateCompte(id: number, compte:Compte): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, compte);
  }
  deleteCompte(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
