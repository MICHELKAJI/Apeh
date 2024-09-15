import { Component } from '@angular/core';
import { NavigateToDirective } from '../navigate-to.directive';
import { CarousolComponent } from '../carousol/carousol.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigateToDirective, CarousolComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
