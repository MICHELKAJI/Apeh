
import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ NgFor, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    {titre: "Recolte de fond pour les enfant de la rue de Bukavu", post: "/images/bg.jpg"},
    {titre: "Recolte de fond pour les enfant de la rue de Kinshasa", post: "/images/bg.jpg"},
    {titre: "Recolte de fond pour les enfant de la rue de Kinshasa", post: "/images/banner.jpeg"},
    {titre: "Recolte de fond pour les enfant de la rue de Kinshasa", post: "/images/about.jpg"},
    {titre: "Recolte de fond pour les enfant de la rue de Kinshasa", post: "/images/bg.jpg"},
    {titre: "Recolte de fond pour les enfant de la rue de Kinshasa", post: "/images/kid.jpg"},
    
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

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }

}
