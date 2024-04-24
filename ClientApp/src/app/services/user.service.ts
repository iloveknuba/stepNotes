import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import moment from "moment";

const baseUrl = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  onLogin(data: User) : Observable<any> {
    return this.http.post(baseUrl + 'signin', data);
  }
  onSighup(data: User) : Observable<any> {
    return this.http.post(baseUrl + 'signup', data);
  }
  private readonly tokenKey = 'auth_token';
  private readonly expirationKey = 'auth_token_expiration';
  private readonly expirationTime = 'auth_token_expiration_time';


  // Функція для збереження токена та терміну його дії в Local Storage
  storeAuthentication(token: string, expiresIn: number): void {
    const expTime = expiresIn / 60 + 'minutes';
    const expirationDate = new Date(Date.now() + expiresIn * 1000);
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.expirationKey, expirationDate.toISOString());
    localStorage.setItem(this.expirationTime, expTime);
  }

  // Функція для видалення токена та терміну його дії з Local Storage
  clearAuthentication(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationKey);
  }

  // Функція для перевірки, чи токен дійсний
  isAuthenticated(): boolean {
    const expiration = localStorage.getItem(this.expirationKey);
    if (!expiration) {
      return false;
    }
    console.log(new Date(expiration) > new Date());
    return new Date(expiration) > new Date();
  }


}
