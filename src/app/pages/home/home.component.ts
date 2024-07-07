//app/pages/home/home.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CoffeeListService } from '../../shared/services/coffee-list.service';
import { CoffeeType } from '../../shared/interfaces/type';
import { provideHttpClient } from '@angular/common/http';
import { CardCoffeeComponent } from '../../shared/components/card-coffee/card-coffee.component';
import { content } from '../../../assets/content/content';
import { FilterButtonComponent } from '../../shared/components/filter-button/filter-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardCoffeeComponent, FilterButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  contentAplication = content
  data: CoffeeType[] = [];
  constructor(private coffeeListService: CoffeeListService) {}

  ngOnInit(): void {
    this.coffeeListService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
