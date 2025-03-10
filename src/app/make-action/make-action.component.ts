import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoDonationService, Data } from '../do-donation.service';

@Component({
  selector: 'app-make-action',
  standalone: true,
  imports: [ NgClass, FormsModule, NgIf],
  templateUrl: './make-action.component.html',
  styleUrl: './make-action.component.css'
})
export class MakeActionComponent {
  nom: string = '';
  tel: string = '';
  ville: string = '';
  mail: string = '';
  message: string = '';
  messageType: string = '';
  isLoading: boolean = false; // 👈 Nouveau !

  constructor(private doDonationService: DoDonationService) {}

  submitNewDonation(): void {
    const nomRegex = /^.{3,30}$/;
    const telRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const villeRegex = /^.{3,30}$/;

    if (!nomRegex.test(this.nom)) {
      this.message = 'Veuillez entrer votre nom.';
      this.messageType = 'error';
      return;
    }
    if (!emailRegex.test(this.mail)) {
      this.message = 'Veuillez entrer un email valide.';
      this.messageType = 'error';
      return;
    }
    if (!telRegex.test(this.tel)) {
      this.message = 'Veuillez entrer un bon numéro valide.';
      this.messageType = 'error';
      return;
    }
    if (!villeRegex.test(this.ville)) {
      this.message = 'Veuillez saisir votre ville.';
      this.messageType = 'error';
      return;
    }

    const data: Data = { nom: this.nom, tel: this.tel, ville: this.ville, mail: this.mail };

    this.isLoading = true; // 👈 Active le loader

    this.doDonationService.postDatas(data).subscribe({
      next: (response) => {
        console.log('Nouveau donateur enregistré avec succès', response);
        this.messageType = 'succès';
        this.message = 'Nous sommes ravis de vous avoir parmi nous !';
        this.resetForm();
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement.', error);
        this.messageType = 'error';
        this.message = `Erreur lors de l'enregistrement, vérifiez votre connexion.`;
        this.resetForm();
      }
    });
  }

  private resetForm() {
    this.nom = '';
    this.ville = '';
    this.tel = '';
    this.mail = '';
    this.isLoading = false; // 👈 Désactive le loader
  }
}

