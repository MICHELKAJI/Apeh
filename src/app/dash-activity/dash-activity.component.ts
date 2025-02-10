import { Component } from '@angular/core';
import { ServiceArticleService } from '../service-article.service';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dash-activity',
  standalone: true,
  imports: [ NgFor, NgIf, DatePipe, CommonModule],
  templateUrl: './dash-activity.component.html',
  styleUrl: './dash-activity.component.css'
})
export class DashActivityComponent {
  article: any[] = [];
  constructor(private articleService: ServiceArticleService) {}
  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    this.articleService.getDatas().subscribe({
      next: (data) => {
        this.article = data.filter(article => article.type === 'news');
        console.log('Actualités chargées:', this.article);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des article:', error);
      }
    });
  }

  isDeleting = false;

  deleteArticle(id: number) {
    this.isDeleting = true;
    this.articleService.deleteDats(id).subscribe({
      next: () => {
        this.article = this.article.filter(article => article.id !== id);
        this.isDeleting = false;
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
        this.isDeleting = false;
      }
    });
  }

}
