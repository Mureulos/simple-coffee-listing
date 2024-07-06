import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeType } from '../../interfaces/type';

@Component({
  selector: 'app-card-coffee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-coffee.component.html',
  styleUrl: './card-coffee.component.scss'
})
export class CardCoffeeComponent {
  @Input() apiData: CoffeeType[] = [] 
}
