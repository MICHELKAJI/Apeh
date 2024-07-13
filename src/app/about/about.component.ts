import { Component } from '@angular/core';
import { NavigateToDirective } from '../navigate-to.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigateToDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
