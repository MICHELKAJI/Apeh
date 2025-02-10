import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NavigationMenuDirective } from '../navigation-menu.directive';
import gsap from 'gsap';

@Component({
  selector: 'app-menu-modal',
  standalone: true,
  imports: [ NgClass, NavigationMenuDirective],
  templateUrl: './menu-modal.component.html',
  styleUrl: './menu-modal.component.css'
})
export class MenuModalComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!:ElementRef

  isVisible = false;
  showModal() {
    this.isVisible = true;
    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, x: "-100%" }, // Commence à gauche (hors écran)
      { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" } // Arrive au centre
    );
  }
  
  closeModal() {
    gsap.to(this.modal.nativeElement, {
      opacity: 0,
      x: "-100%", // Glisse vers la gauche
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        this.isVisible = false;
        this.closeModalEvent.emit(); // Notifie le parent
      }
    });
  }
  
}
