import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModaleDetailsColectComponent } from '../modale-details-colect/modale-details-colect.component';
import { ActualityService } from '../actuality-service.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-small-carousel',
  standalone: true,
  imports: [NgFor, ModaleDetailsColectComponent, NgStyle],
  templateUrl: './small-carousel.component.html',
  styleUrl: './small-carousel.component.css'
})
export class SmallCarouselComponent implements OnInit, OnDestroy {
  actuality: any[] = [];
    images: any[] = [];
    currentIndex: number = 0;
    intervalId: any;
    totalImages: number = 0;
    @ViewChild('modalActuality') modalActuality!: ModaleDetailsColectComponent;
    selectedActuality: any = null;

    constructor(private actualiteService: ActualityService) {}


  ngOnInit() {
    this.actualiteService.getDatas().subscribe(
      (actualites) => {
        this.images = actualites;
        this.totalImages = this.images.length;
        this.startAutoSlide();
      }
    );
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  };

  openModal(Actuality: any) {
    this.selectedActuality = Actuality;

    console.log('Article sélectionné :', this.selectedActuality);

    // Passer les données au modal
    if (this.modalActuality) {
      this.modalActuality.showModal({ Actuality });
    } else {
      console.error('Modal component not found');
    }
  }

}
