import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  async getUsers(): Promise<User[]> {
    return this.http.get<User[]>(' https://jsonplaceholder.typicode.com/users').toPromise();
  }

  async findById(id: number): Promise<User> {
    const users = await this.http.get<User[]>(' https://jsonplaceholder.typicode.com/users').toPromise();
    return users.find(user => user.id === id);
  }

}
