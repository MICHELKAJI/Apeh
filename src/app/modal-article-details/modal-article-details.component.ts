import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-modal-article-details',
  standalone: true,
  imports: [ NgClass, DatePipe, NgFor, FooterComponent],
  templateUrl: './modal-article-details.component.html',
  styleUrl: './modal-article-details.component.css'
})
export class ModalArticleDetailsComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() article: any;
  @Input() sections: any[] = [];

  isVisible = false;
  isSubmitting = false;
 


  showModal(data: { article: any; sections: any[] }) {
    this.article = data.article;
    this.sections = data.sections;
    this.isVisible = true;
  };

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit(); // Notifier le parent

  }

}
