import { Component } from '@angular/core';
import { AboutCarouselComponent } from '../about-carousel/about-carousel.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { OurMissionComponent } from '../our-mission/our-mission.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-page-about',
  standalone: true,
  imports: [AboutCarouselComponent, HeroSectionComponent, OurMissionComponent, FooterComponent],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.css'
})
export class PageAboutComponent {

}
