import { Component } from '@angular/core';
import { Data, ServiceNewslatterService } from '../service-newslatter.service';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationMenuDirective } from '../navigation-menu.directive';
import { CarouselPhotoComponent } from '../carousel-photo/carousel-photo.component';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [ FormsModule, NgClass, NavigationMenuDirective, CarouselPhotoComponent, NgIf],  
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  mail: string = '';  // Propriété liée à l'input
  message: string = ''; // Pour afficher un message de succès ou d'erreur
  messageType: string = '';
  isLoading = false;

  constructor(private newsletterService: ServiceNewslatterService) {}

  submitEmail(): void {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(this.mail)) {
      this.messageType = 'error';
      this.message = 'Veuillez entrer un email valide.';
      this.hideMessageAfterDelay();
      return;
    }

    this.isLoading = true; // Active le loader avant l'envoi

    const data: Data = { mail: this.mail }; // Objet à envoyer

    this.newsletterService.postDatas(data).subscribe({
      next: (response) => {
        console.log('Email envoyé avec succès', response);
        this.messageType = 'succès';
        this.message = 'Email envoyé avec succès !';
        this.mail = ''; // Efface le champ email
        this.isLoading = false; // Désactive le loader après succès
        this.hideMessageAfterDelay();
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi de l'email", error);
        this.messageType = 'error';
        this.message = "Erreur lors de l'envoi de l'email.";
        this.isLoading = false; // Désactive le loader après erreur
        this.hideMessageAfterDelay();
      }
    });
  }

  
  hideMessageAfterDelay(): void {
    setTimeout(() => {
      this.message = ''; // Efface le message
      this.messageType = ''; // Réinitialise le type
    }, 5000);
  }
}
