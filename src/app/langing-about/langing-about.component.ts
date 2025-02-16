import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { BoutonFlotingComponent } from '../bouton-floting/bouton-floting.component';

@Component({
  selector: 'app-langing-about',
  standalone: true,
  imports: [FooterComponent, BoutonFlotingComponent],
  templateUrl: './langing-about.component.html',
  styleUrl: './langing-about.component.css'
})
export class LangingAboutComponent {

}
