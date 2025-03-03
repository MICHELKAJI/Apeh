import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { BoutonFlotingComponent } from '../bouton-floting/bouton-floting.component';
import { MenunavigationDirective } from '../menunavigation.directive';
import { NavigationMenuDirective } from '../navigation-menu.directive';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ BoutonFlotingComponent, NavigationMenuDirective],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent  {
  @ViewChild('box') box!:ElementRef

    constructor(private route: ActivatedRoute){}

    ngAfterViewInit() {
      gsap.from(this.box.nativeElement, { opacity: 0, y: 50, duration: 1 });
    }

}
