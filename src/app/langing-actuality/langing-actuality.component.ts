import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-langing-actuality',
  standalone: true,
  imports: [ FooterComponent, CarouselComponent],
  templateUrl: './langing-actuality.component.html',
  styleUrl: './langing-actuality.component.css'
})
export class LangingActualityComponent {

}
