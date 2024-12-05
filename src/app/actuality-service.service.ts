import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Actuality {
  title: string;
  content: string;
  image: string;
}


@Injectable({
  providedIn: 'root',
})
export class ActualityService {
  private apiUrl = 'http://localhost:3000/actuality';

  constructor(private httpClient: HttpClient) {}

  // Méthode pour envoyer les données directement en JSON
  postDatas(actuality: Actuality): Observable<any> {
    return this.httpClient.post(this.apiUrl, actuality);
  }

  // Méthode GET pour récupérer les données
  getDatas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  // Méthode DELETE pour supprimer une donnée
  deleteData(idActuality: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${idActuality}`);
  }
}
