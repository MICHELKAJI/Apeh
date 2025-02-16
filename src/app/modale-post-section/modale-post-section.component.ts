import { Component, EventEmitter, Output } from '@angular/core';
import { Data, PostServiceService } from '../post-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate, NgFor, NgIf } from '@angular/common';
import { PostSection, SectionPostServiceService } from '../section-post-service.service';

@Component({
  selector: 'app-modale-post-section',
  standalone: true,
  imports: [ NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './modale-post-section.component.html',
  styleUrls: ['./modale-post-section.component.css']
})
export class ModalePostSectionComponent {
  actualityForm: FormGroup;
  imagePreview: string | null = null;
  selectedFile: File | null = null;


  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  posts: Data[] = [];
  isSubmitting = false;

  constructor(private formBuilder: FormBuilder, private postService: PostServiceService,  private postServiceSection: SectionPostServiceService) {
    this.actualityForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      postId: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  showModal() {
    this.isVisible = true;

    this.postService.getDatas().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => console.error('Erreur lors de la récupération des posts', err),
    });
  }

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
  }

  
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
    formData.append('postId', this.actualityForm.value.postId);
    formData.append('title', this.actualityForm.value.title);
    formData.append('content', this.actualityForm.value.content);
    formData.append('image', this.selectedFile as File);
    
    // Ajout d'un log pour voir les données envoyées
    console.log('Données envoyées au serveur:', {
      title: this.actualityForm.value.title,
      content: this.actualityForm.value.content,
      postId: this.actualityForm.value.postId,
      image: this.selectedFile?.name // Affiche le nom du fichier
    });

    this.postServiceSection.postDatas(formData).subscribe({
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
