import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceNewslatterService } from '../service-newslatter.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dash-news',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dash-news.component.html',
  styleUrl: './dash-news.component.css'
})
  
export class DashNewsComponent implements OnInit {
  data: any[] =[];

  constructor(private serviseNews : ServiceNewslatterService){}

  ngOnInit() {
    this.serviseNews.getDatas().subscribe(data => {
    this.data = data;
      
    });
  }

  isDeleting = false;

  deleteNewsletter(idNewsLetter: number) {
    this.isDeleting = true;
    this.serviseNews.deleteData(idNewsLetter)
      .pipe(
        finalize(() => this.isDeleting = false)
      )
      .subscribe({
        next: () => {
          this.data = this.data.filter(item => item.idNewsLetter !== idNewsLetter);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
  }
}
