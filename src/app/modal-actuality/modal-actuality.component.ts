import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ActualityService } from '../actuality-service.service';

@Component({
  selector: 'app-modal-actuality',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './modal-actuality.component.html',
  styleUrls: ['./modal-actuality.component.css'],
})
export class ModalActualityComponent {
  actualityForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  isSubmitting = false;

  constructor(private formBuilder: FormBuilder, private actualityService: ActualityService) {
    this.actualityForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  // Afficher le modal
  showModal() {
    this.isVisible = true;
  }

  // Fermer le modal
  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit(); // Notifier le parent
  }

  // Gestion de la sélection de fichier
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        alert('Le fichier sélectionné doit être une image.');
        this.selectedFile = null;
        this.imagePreview = null;
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // Limite de taille (5MB)
        alert('L\'image ne doit pas dépasser 5 Mo.');
        this.selectedFile = null;
        this.imagePreview = null;
        return;
      }

      this.selectedFile = file;
      this.imagePreview = URL.createObjectURL(file); // Prévisualisation
      this.actualityForm.patchValue({ image: file }); // Met à jour la valeur du champ image
    }
  }
  
  
  // Soumettre le formulaire
  submitPost() {
    this.isSubmitting = true; // Indiquer que la soumission est en cours
    console.log('Form valid:', this.actualityForm.valid); // Log de la validité du formulaire
    console.log('Selected file:', this.selectedFile); // Log du fichier sélectionné

    if (this.actualityForm.invalid || !this.selectedFile) {
      alert('Veuillez remplir tous les champs et sélectionner une image.');
      this.isSubmitting = false; // Réinitialiser l'état de soumission
      return;
    }

    const formData = new FormData();
    formData.append('title', this.actualityForm.value.title);
    formData.append('content', this.actualityForm.value.content);
    formData.append('image', this.selectedFile as File);
    
    // Ajout d'un log pour voir les données envoyées
    console.log('Données envoyées au serveur:', {
      title: this.actualityForm.value.title,
      content: this.actualityForm.value.content,
      image: this.selectedFile?.name // Affiche le nom du fichier
    });

    this.actualityService.postDatas(formData).subscribe({
      next: (response) => {
        alert('Actualité créée avec succès !');
        this.actualityForm.reset();
        this.closeModal();
      },
      error: (error) => {
        alert('Erreur lors de la création de l\'actualité.');
        console.error(error);
      },
      complete: () => {
        this.isSubmitting = false; // Réinitialiser l'état de soumission après la réponse
      }
    });
  }
}
