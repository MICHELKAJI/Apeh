import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhotoComponent } from './carousel-photo.component';

describe('CarouselPhotoComponent', () => {
  let component: CarouselPhotoComponent;
  let fixture: ComponentFixture<CarouselPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
