import { Component, OnInit } from '@angular/core';
import { Data, ServiceNewslatterService } from '../service-newslatter.service';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass, RouterLink],  // Retirer BrowserModule et HttpClientModule ici
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit{
  mail: string = '';  // Propriété liée à l'input
  message: string = ''; // Pour afficher un message de succès ou d'erreur
  messageType : string='';
  constructor(private newsletterService: ServiceNewslatterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment =>{
      if(fragment){
        const element = document.getElementById(fragment);
        if(element){
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    })
  }

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
