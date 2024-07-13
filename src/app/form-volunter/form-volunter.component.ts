import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-volunter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './form-volunter.component.html',
  styleUrl: './form-volunter.component.css'
})
export class FormVolunterComponent {
  @Output() closeFormEven = new EventEmitter<void>();

  isVisible= false;
  showForm(){
    this.isVisible = true;
  }
  closeForm(){
    this.isVisible = false;
    this.closeFormEven.emit();
  }

}
