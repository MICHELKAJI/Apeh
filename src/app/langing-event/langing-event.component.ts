import { parseTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { PageCausesComponent } from '../page-causes/page-causes.component';

@Component({
  selector: 'app-langing-event',
  standalone: true,
  imports: [ PageCausesComponent],
  templateUrl: './langing-event.component.html',
  styleUrl: './langing-event.component.css'
})
export class LangingEventComponent {

}
