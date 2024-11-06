import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
