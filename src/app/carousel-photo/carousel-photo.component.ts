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
    { post: "/images/ideechamps1.jpeg"},
    { post: "/images/ideechamps2.jpeg"},
    { post: "/images/ideechamps3.jpeg"},
    { post: "/images/ideechamps4.jpeg"},
    { post: "/images/ideechamps5.jpeg"},
    { post: "/images/ideechamps6.jpeg"},
    { post: "/images/ideechamps7.jpeg"},
    { post: "/images/ideechamps8.jpeg"},
    { post: "/images/ideechamps9.jpeg"},
    { post: "/images/ideechamps10.jpeg"},
    { post: "/images/ideechamps11.jpeg"},
    { post: "/images/ideechamps12.jpeg"},
    { post: "/images/ideechamps13.jpeg"},
    { post: "/images/ideechamps14.jpeg"},
    { post: "/images/ideechamps15.jpeg"},
    { post: "/images/ideechamps16.jpeg"},
    { post: "/images/ideechamps18.jpeg"},
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
