import { DatePipe, NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import gsap from 'gsap';

@Component({
  selector: 'app-modal-article-details',
  standalone: true,
  imports: [ NgClass, DatePipe, NgFor, FooterComponent],
  templateUrl: './modal-article-details.component.html',
  styleUrl: './modal-article-details.component.css'
})
export class ModalArticleDetailsComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() article: any;
  @Input() sections: any[] = [];

  isVisible = false;
  isSubmitting = false;
 


  showModal(data: { article: any; sections: any[] }) {
    this.article = data.article;
    this.sections = data.sections;
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

}
