
import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-bouton-floting',
  standalone: true,
  imports: [ NgIf],
  templateUrl: './bouton-floting.component.html',
  styleUrl: './bouton-floting.component.css'
})
export class BoutonFlotingComponent {
  isOpen = false;
  @ViewChild('buttonGroup') buttonGroup!: ElementRef;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const buttons = this.buttonGroup.nativeElement.children;

    if (this.isOpen) {
      gsap.to(buttons, {
        opacity: 1,
        y: (index) => -(index + 1) * 60,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    } else {
      gsap.to(buttons, {
        opacity: 0,
        y: 0,
        duration: 0.3,
        ease: 'back.in(1.7)'
      });
    }
  }
}
