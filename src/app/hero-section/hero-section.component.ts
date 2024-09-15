import { Component } from '@angular/core';
import { CarousolComponent } from '../carousol/carousol.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CarousolComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
