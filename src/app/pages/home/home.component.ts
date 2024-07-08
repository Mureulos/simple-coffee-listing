import { Component, Input, OnInit } from '@angular/core';
import { CoffeeListService } from '../../shared/services/coffee-list.service';
import { CoffeeType } from '../../shared/interfaces/type';
import { CardCoffeeComponent } from '../../shared/components/card-coffee/card-coffee.component';
import { content } from '../../../assets/content/content';
import { FilterButtonComponent } from '../../shared/components/filter-button/filter-button.component';
import { CommonModule } from '@angular/common';

interface FilterButton {
  text: string;
  active: boolean;
  action: () => void
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardCoffeeComponent, FilterButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: CoffeeType[] = [];
  contentAplication = content;
  filterButtons: FilterButton[] = []

  constructor(private coffeeListService: CoffeeListService) {}

  ngOnInit(): void {
    this.filterButtons = [
      {
        text: 'All products',
        active: true,
        action: () => this.getData()
      }, 
      {
        text: 'Available now',
        active: false,
        action: () => this.filterData()
      }
    ]
    this.getData();
  }

  getData(): void {
    this.coffeeListService.getData().subscribe((response) => {
      this.data = response;
      this.updateButtonState(0);
    });
  }

  filterData(): void {
    this.coffeeListService.filterData().subscribe((response) => {
      this.data = response;
      this.updateButtonState(1);
    });
  }

  updateButtonState(activeIndex: number): void {
    this.filterButtons.forEach((button, index) => {
      button.active = index === activeIndex;
    });
  }

  onFilterButtonClicked(buttonIndex: number): void {
    this.updateButtonState(buttonIndex);
    this.filterButtons[buttonIndex].action();
  }
}
