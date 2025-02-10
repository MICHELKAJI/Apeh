import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { AboutComponent } from '../about/about.component';
import { SectionEventComponent } from '../section-event/section-event.component';
import { MakeActionComponent } from '../make-action/make-action.component';
import { NewsComponent } from '../news/news.component';
import { FooterComponent } from '../footer/footer.component';
import { SmallCarouselComponent } from "../small-carousel/small-carousel.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BannerComponent, CallToActionComponent, AboutComponent, SectionEventComponent, MakeActionComponent, NewsComponent, FooterComponent, SmallCarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
