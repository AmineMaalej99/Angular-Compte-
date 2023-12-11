// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'URL_DE_VOTRE_API'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Effectuez une demande HTTP vers votre backend pour l'authentification
    // Assurez-vous que votre backend renvoie une réponse appropriée
    // Vous devrez peut-être ajuster cette URL en fonction de votre backend
    const loginUrl = `${this.apiUrl}/api/v1/login`;

    // Remplacez la logique ci-dessous par votre logique d'authentification réelle
    return this.http.post(loginUrl, { username, password });
  }
}
