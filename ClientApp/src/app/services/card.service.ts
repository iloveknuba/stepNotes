import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card.model";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8080/api/notes';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private http: HttpClient) {}

  getAll(): Observable<Card[]> {
    return this.http.get<Card[]>(baseUrl);
  }
  create(data:any) : Observable<any> {
    return this.http.post(baseUrl, data);
  }
  get(id: any): Observable<Card> {
    return this.http.get<Card>(`${baseUrl}/${id}`);
  }
  update(id:any, data:any): Observable<any> {
    return  this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
