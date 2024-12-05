import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActualityService } from '../actuality-service.service';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ NgFor, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: any[] = [];
  currentIndex: number = 0;
  intervalId: any;
  totalImages: number = 0;

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
  }

}
