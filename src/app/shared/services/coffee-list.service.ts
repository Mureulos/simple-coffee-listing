//app/shared/services/coffee-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CoffeeType } from '../interfaces/type';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoffeeListService {
  private apiUrl: string = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<CoffeeType[]> {
    return this.httpClient.get<CoffeeType[]>(`${this.apiUrl}`)
  }

  filterData(): Observable<CoffeeType[]> {
    return this.getData().pipe(map((allCoffee: CoffeeType[]) => allCoffee.filter(e => e.available == true)))
  }
}
