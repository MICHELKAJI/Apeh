import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PostSection {
  title: string;
  content: string;
  postId: number;
  image?: File; // Optionnel si non obligatoire
}

@Injectable({
  providedIn: 'root'
})
export class SectionPostServiceService {

  private apiUrl ='backendaped-production.up.railway.app/postsection'; 

  constructor(private httpClient: HttpClient) { }

  // Méthode POST pour envoyer les données
  postDatas(postSection: FormData ): Observable<PostSection> {
    return this.httpClient.post<PostSection>(this.apiUrl, postSection );
  };
  getDatas(): Observable<PostSection[]>{
    return this.httpClient.get<PostSection[]>(this.apiUrl);
  }

  // Méthode DELETE pour supprimer une donnée
  deleteData(idNewsLetter: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${idNewsLetter}`);
  }
}
