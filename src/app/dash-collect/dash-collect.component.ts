import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActualityService } from '../actuality-service.service';

@Component({
  selector: 'app-dash-collect',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './dash-collect.component.html',
  styleUrl: './dash-collect.component.css'
})
export class DashCollectComponent implements OnInit {
  actualites: any[] = [];

  constructor(private actualiteService: ActualityService) {}

  ngOnInit() {
    this.loadActualites();
  }

  loadActualites() {
    this.actualiteService.getDatas().subscribe({
      next: (data) => {
        this.actualites = data;
        console.log('Actualités chargées:', this.actualites);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des actualités:', error);
      }
    });
  }

  isDeleting = false;

  deleteActualite(id: number) {
    this.isDeleting = true;
    this.actualiteService.deleteData(id).subscribe({
      next: () => {
        this.actualites = this.actualites.filter(actualite => actualite.id !== id);
        this.isDeleting = false;
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
        this.isDeleting = false;
      }
    });
  }
}

 

