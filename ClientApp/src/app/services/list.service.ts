import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {List} from "../models/list.model";

const baseUrl = 'http://localhost:8080/api/lists';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor( private http: HttpClient) {}

  getAll(): Observable<List[]> {
    return this.http.get<List[]>(baseUrl);
  }
  create(data:any) : Observable<any> {
    return this.http.post(baseUrl, data);
  }
  get(id: any): Observable<List> {
    return this.http.get<List>(`${baseUrl}/${id}`);
  }
  update(id:any, data:any): Observable<any> {
    return  this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
