import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal-activity',
  standalone: true,
  imports: [ NgClass, NgFor],
  templateUrl: './modal-activity.component.html',
  styleUrl: './modal-activity.component.css'
})
export class ModalActivityComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  showModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit(); // Notifier le parent
  }
  

}
