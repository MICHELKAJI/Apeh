// import { HttpClient} from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// export interface Data {
//   mail : string
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceNewslatterService {
//   private apiUrl = 'http://localhost:3000/news'; 

//   constructor(private httpClient: HttpClient) { }
//   postDatas(): Observable<Data[]>{
//     return this.httpClient.get<Data[]>(this.apiUrl);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Data {
  mail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceNewslatterService {
  private apiUrl = 'http://localhost:3000/news'; 

  constructor(private httpClient: HttpClient) { }

  // Méthode POST pour envoyer les données
  postDatas(data: Data): Observable<Data> {
    return this.httpClient.post<Data>(this.apiUrl, data);
  }
}
