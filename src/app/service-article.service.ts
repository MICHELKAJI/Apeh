import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Data {
  title: string;
  content: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceArticleService {
  private urlapi ="backendaped-production.up.railway.app/post"

  constructor( private httpClient: HttpClient) { }

  postDatas(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.urlapi, data);
  };

  getDatas(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.urlapi);
  };
  deleteDats(idPost: number): Observable<any> {
    return this.httpClient.delete(`${this.urlapi}/${idPost}`);
  };
  getDatasOne(id: string): Observable<Data[]>{
    return this.httpClient.get<Data[]>(`${this.urlapi}/${id}`);
  }
}
