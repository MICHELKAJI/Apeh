import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { NavigationMenuDirective } from '../navigation-menu.directive';

@Component({
  selector: 'app-menu-modal',
  standalone: true,
  imports: [ NgClass, NavigationMenuDirective],
  templateUrl: './menu-modal.component.html',
  styleUrl: './menu-modal.component.css'
})
export class MenuModalComponent {
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
