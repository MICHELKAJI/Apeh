import { Component} from '@angular/core';
import { NavigationMenuDirective } from '../navigation-menu.directive';
import { NgClass } from '@angular/common';
import { Data, ServiceNewslatterService } from '../service-newslatter.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ NavigationMenuDirective, NgClass, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mail: string = '';  // Propriété liée à l'input
  message: string = ''; // Pour afficher un message de succès ou d'erreur
  messageType : string='';

  constructor(private newsletterService: ServiceNewslatterService, private route: ActivatedRoute){}
  submitEmail(): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.mail)) {
      this.message = 'Veuillez entrer un email valide.';
      return; // Arrêter l'exécution si l'email est invalide
    }
    const data: Data = { mail: this.mail }; // Crée un objet de type Data avec l'email

    this.newsletterService.postDatas(data).subscribe({
      next: (response) => {
        console.log('Email envoyé avec succès', response);
        this.messageType ='succès';
        this.message = 'Email envoyé avec succès!';
        this.mail = '';
        
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi de l\'email', error);
        this.messageType ='error';
        this.message = 'Erreur lors de l\'envoi de l\'email.';
        this.mail = '';
       
      }
    });
  }

}
