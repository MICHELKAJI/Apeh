import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousol',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carousol.component.html',
  styleUrl: './carousol.component.css'
})
export class CarousolComponent implements OnInit, OnDestroy {
  slides = [
    { src: "assets/images/partage.jpeg", alt: "Description de l'image 1" },
    { src: "assets/images/idee.jpeg", alt: "Description de l'image 2" },
    { src: "assets/images/ideePartage.jpeg", alt: "Description de l'image 3" },
    { src: "assets/images/even.jpeg", alt: "Description de l'image 4" },
    { src: "assets/images/first.jpeg", alt: "Description de l'image 5" },
    { src: "assets/images/cool.jpeg", alt: "Description de l'image 6" },
    { src: "assets/images/rizing.jpeg", alt: "Description de l'image 7" }

  ];
  currentSlideIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = 
      this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
  }

}
