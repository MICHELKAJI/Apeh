import { Component } from '@angular/core';
import { CarousolComponent } from '../carousol/carousol.component';
import { FormVolunterComponent } from '../form-volunter/form-volunter.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarousolComponent, FormVolunterComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
