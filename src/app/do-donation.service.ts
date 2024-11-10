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
  private urlapi = "http://localhost:3000/donation"

  constructor( private httpClient: HttpClient) { }

  postDatas(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.urlapi, data);
  }
}

