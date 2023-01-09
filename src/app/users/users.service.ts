import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Filters } from './models/filters';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly API =
    'https://randomuser.me/api/?inc=name,email,picture,location&noinfo&results=250&seed=someseed';

  constructor(private httpClient: HttpClient) {}

  private getUsers(): Observable<User[]> {
    return this.httpClient.get<{ results: User[] }>(this.API).pipe(
      map((data) => data.results),
      catchError((err) => of(err))
    );
  }

  public getFilteredUsers(filters: Filters): Observable<User[]> {
    return this.getUsers().pipe(
      map((users) => users.filter((user) => this.isUserValid(user, filters)))
    );
  }

  private isUserValid(user: User, filters: Filters) {
    const { search, country } = filters;

    return (
      (!search && !country) ||
      ((user.name.first + user.name.last + user.email).includes(search) &&
        (!country || user.location.country === country))
    );
  }
}
