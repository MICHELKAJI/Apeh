import { Component } from '@angular/core';
import { NavigationMenuDirective } from '../navigation-menu.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ NavigationMenuDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
