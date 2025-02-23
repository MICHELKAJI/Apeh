import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Data {
  nom: string;
  tel: string;
  mail: string;
  ville: string
}
@Injectable({
  providedIn: 'root'
})
export class DoDonationService {
  private urlapi = "backendaped-production.up.railway.app/donation"

  constructor( private httpClient: HttpClient) { }

  postDatas(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.urlapi, data);
  };

  getDatas(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.urlapi);
  };
  deleteDats(idDonateur: number): Observable<any> {
    return this.httpClient.delete(`${this.urlapi}/${idDonateur}`);
  }
}

