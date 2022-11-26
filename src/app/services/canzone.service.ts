import { Injectable } from '@angular/core';
import { Canzone } from '../models/Canzone.model';
import { CANZONI } from '../mocks/Canzone.mock';
import { Observable,of,ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanzoneService {

  apiBaseUrl="api/canzoni";
  wantedCanzone= new ReplaySubject();
  autore=new ReplaySubject();


  constructor(private http:HttpClient) { }

  getCanzoni():Observable<Canzone[]>{
    return this.http.get<Canzone[]>(`${this.apiBaseUrl}/`);
  }

  // getCanzone(id:number):Observable<Canzone | undefined>{
  //   const canzone= CANZONI.find(canzone =>canzone._id === id);
  //   return of (canzone);
  // }

  getCanzone(id:string):Observable<Canzone | undefined>{
    return this.http.get<Canzone>(`${this.apiBaseUrl}/${id}`);
  }

  postCanzone(canzone: any): Observable<any>{

    return this.http.post(`${this.apiBaseUrl}/`,canzone);
  }

  searchCanzoni(text:string): Observable<Canzone[]>{
    return this.http.get<Canzone[]>(`${this.apiBaseUrl}/cerca/${text}`);
  }
}
