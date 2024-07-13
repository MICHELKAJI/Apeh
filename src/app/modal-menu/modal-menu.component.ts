import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { NavigateToDirective } from '../navigate-to.directive';

@Component({
  selector: 'app-modal-menu',
  standalone: true,
  imports: [NgClass, NavigateToDirective],
  templateUrl: './modal-menu.component.html',
  styleUrl: './modal-menu.component.css'
})
export class ModalMenuComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  isVisible = false;
  showModal(){
    this.isVisible=true
  }

  closeModal(){
    this.isVisible= false;
    this.closeModalEvent.emit();
  }
  
}
