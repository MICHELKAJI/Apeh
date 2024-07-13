import { Component } from '@angular/core';
import { NavigateToDirective } from '../navigate-to.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavigateToDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
