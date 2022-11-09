import { Injectable } from '@angular/core';
import { Canzone } from '../models/Canzone.model';
import { CANZONI } from '../mocks/Canzone.mock';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanzoneService {

  constructor() { }
  getCanzoni():Observable<Canzone[]>{
    return of (CANZONI);
  }
}
