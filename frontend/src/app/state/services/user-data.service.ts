import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private readonly http: HttpClient) {}

  getUser() {
    return this.http.get<User>('/api/user');
  }
}
