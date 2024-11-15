import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
import { NgClass } from '@angular/common';
import { NavigationMenuDirective } from '../navigation-menu.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuModalComponent, NgClass, NavigationMenuDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled= false;

  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }

}
