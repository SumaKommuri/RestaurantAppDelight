import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  }
}
