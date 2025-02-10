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
  showModal(){
    this.isVisible=true;
    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, scale: 0.5 }, // Démarre avec une échelle petite et invisible
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" } // Animation fluide d'apparition
    );
  }

  closeModal(){
    gsap.to(this.modal.nativeElement, { opacity: 0, scale: 0.5, duration: 0.3 });

    setTimeout(() => {
      this.isVisible = false;
      this.closeModalEvent.emit(); // Notifier le parent une fois l'animation terminée
    }, 300); // Attendre la fin de l'animation avant de changer l'état de la visibilité
  }

}
