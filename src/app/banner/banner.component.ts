import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import gsap from 'gsap';
import { BoutonFlotingComponent } from '../bouton-floting/bouton-floting.component';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ RouterLink, BoutonFlotingComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  @ViewChild('box') box!:ElementRef

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.fragment.subscribe(fragment =>{
        if(fragment){
          const element = document.getElementById(fragment);
          if(element){
            element.scrollIntoView({behavior: 'smooth'});
          }
        }
      })
      
    }
    ngAfterViewInit() {
      gsap.from(this.box.nativeElement, { opacity: 0, y: 50, duration: 1 });
    }

}
