
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-langing-event',
  standalone: true,
  imports: [ FooterComponent],
  templateUrl: './langing-event.component.html',
  styleUrl: './langing-event.component.css'
})
export class LangingEventComponent {
  @ViewChildren('animatedBox') animatedBoxes!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.animatedBoxes.forEach((box, index) => {
      gsap.from(box.nativeElement, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.2, // Décalage progressif des animations
        scrollTrigger: {
          trigger: box.nativeElement,
          start: "top 85%", // Déclenchement quand l’élément est visible
          toggleActions: "play none none none",
        },
      });
    });
  }

}
