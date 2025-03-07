import { DatePipe, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-modale-details-colect',
  standalone: true,
  imports: [ NgIf, DatePipe],
  templateUrl: './modale-details-colect.component.html',
  styleUrl: './modale-details-colect.component.css'
})
export class ModaleDetailsColectComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() Actuality: any;

  isVisible = false;
  selectedImage: any;

  showModal(data: { Actuality: any; }) {
    this.Actuality = data.Actuality;
    this.isVisible = true;
    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, scale: 0.5 }, // Démarre avec une échelle petite et invisible
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" } // Animation fluide d'apparition
    );
  };

  closeModal() {
    gsap.to(this.modal.nativeElement, { opacity: 0, scale: 0.5, duration: 0.3 });

    setTimeout(() => {
      this.isVisible = false;
      this.closeModalEvent.emit(); // Notifier le parent une fois l'animation terminée
    }, 300); // Attendre la fin de l'animation avant de changer l'état de la visibilité
  }

  openModal(image: any) {
    this.selectedImage = image;
    this.isVisible = true;

    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  }

  isDonationDisabled(): boolean {
    if (!this.Actuality?.date) return true; // Désactive si la date est absente
    const postDate = new Date(this.Actuality.date);
    const today = new Date();
    return today < postDate; // Désactive le bouton si aujourd'hui est avant la date du post
  }

}
