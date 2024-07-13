import { Component } from '@angular/core';
import { NavigateToDirective } from '../navigate-to.directive';

@Component({
  selector: 'app-event-charity',
  standalone: true,
  imports: [NavigateToDirective],
  templateUrl: './event-charity.component.html',
  styleUrl: './event-charity.component.css'
})
export class EventCharityComponent {

}
