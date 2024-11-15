import { NgFor, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-photo',
  standalone: true,
  imports: [NgFor, NgStyle ],
  templateUrl: './carousel-photo.component.html',
  styleUrl: './carousel-photo.component.css'
})
export class CarouselPhotoComponent implements OnInit, OnDestroy {
  images = [
    { post: "/images/idee.jpg"},
    { post: "/images/etienne.jpg"},
    { post: "/images/jennifer.jpg"},
    { post: "/images/jennifer.jpg"},
    { post: "/images/bg.jpg"},
    { post: "/images/kid.jpg"},
    
  ];
  currentIndex: number = 0;
  intervalId: any;
  totalImages: number = 0;

  ngOnInit() {
    this.totalImages = this.images.length;
    this.startAutoSlide();
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

}
