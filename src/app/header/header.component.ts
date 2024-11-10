import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuModalComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled= false;
  
  @HostListener('window.scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }

}
