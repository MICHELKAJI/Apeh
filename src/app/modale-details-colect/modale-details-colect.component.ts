import { DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modale-details-colect',
  standalone: true,
  imports: [ NgIf, DatePipe],
  templateUrl: './modale-details-colect.component.html',
  styleUrl: './modale-details-colect.component.css'
})
export class ModaleDetailsColectComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() Actuality: any;

  isVisible = false;
  selectedImage: any;

  showModal(data: { Actuality: any; }) {
    this.Actuality = data.Actuality;
    this.isVisible = true;
  };

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit(); // Notifier le parent
  }

  openModal(image: any) {
    this.selectedImage = image;
    this.isVisible = true;
  }

}
