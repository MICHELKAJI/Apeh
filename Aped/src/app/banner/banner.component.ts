import { Component } from '@angular/core';
import { CarousolComponent } from '../carousol/carousol.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarousolComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
