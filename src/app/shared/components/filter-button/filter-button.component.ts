import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss'
})
export class FilterButtonComponent {
  @Input() text: string = ''
  @Input() active: boolean = false
  @Input() action?: () => void

  onClick(): void {
    if (this.action) {
      this.action();
    }
  }
}
