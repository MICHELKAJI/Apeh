import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoDonationService, Data } from '../do-donation.service';

@Component({
  selector: 'app-make-action',
  standalone: true,
  imports: [ NgClass, NgFor, FormsModule],
  templateUrl: './make-action.component.html',
  styleUrl: './make-action.component.css'
})
export class MakeActionComponent {
  nom: string = '';
  tel: string = '';
  ville: string = ''
  mail: string = '';  // Propriété liée à l'input
  message: string = ''; // Pour afficher un message de succès ou d'erreur
  messageType : string='';

  constructor( private doDonationService : DoDonationService){}

  submitNewDonation() : void {
    const nomRegex = /^.{3,30}$/;
    const telRegex = /^\+?\d{1,3}[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const villeRegex = /^.{3,30}$/;


    if(!nomRegex.test(this.nom)){
      this.message = 'Veuillez entrer votre nom.';
      return;
    }
    if (!emailRegex.test(this.mail)) {
      this.message = 'Veuillez entrer un email valide.';
      return; // Arrêter l'exécution si l'email est invalide
    }
    if(!telRegex.test(this.tel)){
      this.message = 'Veuillez entrer un bon numero valide.';
      return;
    }
    if(!villeRegex.test(this.ville)){
      this.message = 'Veuillez saisir votre ville.';
      return;
    }
    

    const data: Data = { nom : this.nom, tel: this.tel, ville: this.ville, mail: this.mail };

    this.doDonationService.postDatas(data).subscribe({
      next: (response) => {
        console.log('Nouveau donateur enregistrer avec succès', response);
        this.messageType ='succès';
        this.message = 'Nous sommes ravis de vous avoir parmi nous  !';
        this.nom = '';
        this.ville = '';
        this.tel = '';
        this.mail = '';
        
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement.', error);
        this.messageType ='error';
        this.message = `Erreur lors de l\'enregistrement vérifier votre connexion`;
        this.nom = '';
        this.ville = '';
        this.tel = '';
        this.mail = '';
       
      }
    });
  }
  

   



}
