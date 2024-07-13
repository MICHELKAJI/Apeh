import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { AboutComponent } from '../about/about.component';
import { EventComponent } from '../event/event.component';
import { EventCharityComponent } from '../event-charity/event-charity.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BannerComponent, AboutComponent, EventComponent, EventCharityComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
