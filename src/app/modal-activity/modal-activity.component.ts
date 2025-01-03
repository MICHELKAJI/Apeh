import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Data, PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-modal-activity',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule], // Ajoutez ReactiveFormsModule ici
  templateUrl: './modal-activity.component.html',
  styleUrls: ['./modal-activity.component.css']
})
export class ModalActivityComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;
  postForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private activityService: PostServiceService) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      type: ['', [Validators.required]]
    });
  }

  showModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
    this.postForm.reset();
  }

  submitPost() {
    if (this.postForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const newPost: Data = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
      type: this.postForm.value.type
    };

    this.activityService.postDatas(newPost).subscribe({
      next: (response) => {
        console.log('Post created successfully:', response);
        this.isSubmitting = false;
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating post:', error);
        this.isSubmitting = false;
      }
    });
  }
}
