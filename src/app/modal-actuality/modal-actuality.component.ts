import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actuality, ActualityService } from '../actuality-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-modal-actuality',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './modal-actuality.component.html',
  styleUrls: ['./modal-actuality.component.css'],
})
export class ModalActualityComponent {
  actualityForm: FormGroup;
  base64Image: string = '';
  imagePreview: string | null = null;

  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  isSubmitting = false;

  constructor(private formBuilder: FormBuilder, private actualityService: ActualityService) {
    this.actualityForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
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
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
        this.actualityForm.patchValue({ image: this.imagePreview });
      };
      reader.readAsDataURL(file);
    }
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.actualityForm.valid) {
      const actuality: Actuality = this.actualityForm.value;
      this.actualityService.postDatas(actuality).subscribe({
        next: (response) => {
          console.log('Actualité créée avec succès', response);
        },
        error: (error) => {
          console.error('Erreur lors de la création', error);
        }
      });
    }
  }
}
