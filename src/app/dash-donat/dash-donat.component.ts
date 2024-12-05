import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DoDonationService } from '../do-donation.service';

@Component({
  selector: 'app-dash-donat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dash-donat.component.html',
  styleUrl: './dash-donat.component.css'
})
export class DashDonatComponent {
  data: any[] =[];
  constructor( private servicedanation : DoDonationService){}

  ngOnInit() {
    this.servicedanation.getDatas().subscribe(data => {
    this.data = data;
      
    });
  };
  deleteDonateur(idDonateur: number) {
    this.servicedanation.deleteDats(idDonateur).subscribe({
      next: () => {
        // Filtrer la liste pour retirer le donateur supprimé
        this.data = this.data.filter(item => item.idDonateur !== idDonateur);
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
      }
    });
  }


}
