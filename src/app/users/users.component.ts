import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  map,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { User } from './models/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users$!: Observable<User[]>;
  public isLoading = false;
  public page = 1;
  public usersPerPage = 50;

  private search = new FormControl('', { nonNullable: true });
  private countryFilter = new FormControl('', { nonNullable: true });

  constructor(private readonly personsService: UsersService) {
    const countryFilter$ = this.countryFilter.valueChanges.pipe(startWith(''));

    const search$ = this.search.valueChanges.pipe(
      map((search) => search?.trim()),
      startWith('')
    );

    this.users$ = combineLatest([search$, countryFilter$]).pipe(
      tap(() => (this.isLoading = true)),
      switchMap(([search, country]) =>
        personsService.getFilteredUsers({ search, country })
      ),
      tap(() => (this.isLoading = false))
    );
  }

  public onSearch(searchWord: string) {
    this.page = 1;
    this.search.setValue(searchWord);
  }

  public onCountryFilter(countryFilter: string) {
    this.page = 1;
    this.countryFilter.setValue(countryFilter);
  }

  public async onPageChange(page: number) {
    this.page = page;
  }

  public getCountries(users: User[]): string[] {
    return [...new Set(users.map((user) => user.location.country))];
  }

  public getUsersByPage(users: User[], page: number): User[] {
    const pageStartIndex = (page - 1) * this.usersPerPage;
    const pageEndIndex = pageStartIndex + this.usersPerPage;

    return users.slice(pageStartIndex, pageEndIndex);
  }

  public getNumberOfPages(numberOfUsers: number): number {
    return Math.ceil(numberOfUsers / this.usersPerPage);
  }
}
