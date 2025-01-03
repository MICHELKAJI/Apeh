import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ServiceArticleService } from '../service-article.service';
import { DatePipe, NgFor } from '@angular/common';
import { ModalArticleDetailsComponent } from '../modal-article-details/modal-article-details.component';
import { SectionPostServiceService } from '../section-post-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-langing-actuality',
  standalone: true,
  imports: [CommonModule, FooterComponent, CarouselComponent, DatePipe, NgFor, ModalArticleDetailsComponent],
  templateUrl: './langing-actuality.component.html',
  styleUrl: './langing-actuality.component.css',
})
export class LangingActualityComponent {
  article: any[] = [];
  articles: any[] = [];
  sections: any[] = []; // Contient toutes les sections renvoyées par le service
  @ViewChild('modalSection') modalSection!: ModalArticleDetailsComponent;
  selectedArticle: any = null;

  constructor(
    private articleService: ServiceArticleService,
    private postSection: SectionPostServiceService
  ) {}

  ngOnInit() {
    this.loadArticlePrint();
    this.loadNewsPrint();
    this.loadAllSections(); // Charger toutes les sections au démarrage
  }

  loadArticlePrint() {
    this.articleService.getDatas().subscribe({
      next: (data) => {
        this.article = data.filter((article) => article.type === 'blog');
        console.log('Actualités chargées :', this.article);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des articles :', error);
      },
    });
  }

  loadNewsPrint() {
    this.articleService.getDatas().subscribe({
      next: (data) => {
        this.articles = data.filter((articles) => articles.type === 'news');
        console.log('Actualités chargées :', this.articles);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des articles :', error);
      },
    });
  }

  loadAllSections() {
    this.postSection.getDatas().subscribe({
      next: (data) => {
        this.sections = data; // Charger toutes les sections
        console.log('Toutes les sections chargées :', this.sections);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des sections :', error);
      },
    });
  }

  openModal(article: any) {
    this.selectedArticle = article;
    const articleId = article.idPost;

    // Filtrer les sections localement
    const filteredSections = this.sections.filter(
      (section) => section.postId === articleId
    );

    console.log('Sections filtrées :', filteredSections, this.sections);

    // Passer les données au modal
    this.modalSection.showModal({ article, sections: filteredSections });
  }
}
