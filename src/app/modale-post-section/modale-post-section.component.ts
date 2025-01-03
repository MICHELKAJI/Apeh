import { Component, EventEmitter, Output } from '@angular/core';
import { Data, PostServiceService } from '../post-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
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
  base64Image: string = '';

  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  posts: Data[] = [];

  constructor(private formBuilder: FormBuilder, private postService: PostServiceService,  private postServiceSection: SectionPostServiceService) {
    this.actualityForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      postId: ['', Validators.required],
      image: ['', Validators.required],
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

  resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        img.src = e.target.result;
      };
  
      reader.onerror = reject;
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        let { width, height } = img;
  
        // Redimensionnement
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.floor((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.floor((width * maxHeight) / height);
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
  
        ctx.drawImage(img, 0, 0, width, height);
  
        // Compression et conversion en Base64
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Compression à 70%
        resolve(dataUrl);
      };
  
      reader.readAsDataURL(file);
    });
  }
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const maxWidth = 800; // Limite de largeur en pixels
      const maxHeight = 800; // Limite de hauteur en pixels
  
      this.resizeImage(file, maxWidth, maxHeight)
        .then((compressedBase64) => {
          this.imagePreview = compressedBase64;
          this.actualityForm.patchValue({ image: compressedBase64 });
        })
        .catch((error) => {
          console.error('Erreur lors de la compression de l\'image', error);
        });
    }
  }
  

  onSubmit(): void {
    if (this.actualityForm.valid) {
      const postSection: PostSection = this.actualityForm.value;
      this.postServiceSection.postDatas(postSection).subscribe({
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
