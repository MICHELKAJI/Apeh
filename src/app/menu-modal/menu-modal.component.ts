import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, output, ViewChild } from '@angular/core';
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
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!:ElementRef

  isVisible = false;
  showModal(){
    this.isVisible=true
  }

  closeModal(){
    this.isVisible= false;
    this.closeModalEvent.emit();
  }

  ngAfterViewInit() {
    gsap.from(this.box.nativeElement, { opacity: 0, l: 50, duration: 0.2 });
  }

}
