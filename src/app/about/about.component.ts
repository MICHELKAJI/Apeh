import { Component } from '@angular/core';
import { NavigationMenuDirective } from '../navigation-menu.directive';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ NavigationMenuDirective ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
