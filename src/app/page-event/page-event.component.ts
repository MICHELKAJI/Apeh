import { Component } from '@angular/core';
import { FirstSectionEventComponent } from '../first-section-event/first-section-event.component';

@Component({
  selector: 'app-page-event',
  standalone: true,
  imports: [FirstSectionEventComponent],
  templateUrl: './page-event.component.html',
  styleUrl: './page-event.component.css'
})
export class PageEventComponent {

}
