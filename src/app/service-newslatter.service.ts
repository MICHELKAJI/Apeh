import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Data {
  mail: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceNewslatterService {
  private apiUrl = 'backendaped-production.up.railway.app/news'; 

  constructor(private httpClient: HttpClient) { }

  // Méthode POST pour envoyer les données
  postDatas(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.apiUrl, data);
  };
  getDatas(): Observable<Data[]>{
    return this.httpClient.get<Data[]>(this.apiUrl);
  }

  // Méthode DELETE pour supprimer une donnée
  deleteData(idNewsLetter: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${idNewsLetter}`);
  }
}
