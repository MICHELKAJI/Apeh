import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalePostSectionComponent } from './modale-post-section.component';

describe('ModalePostSectionComponent', () => {
  let component: ModalePostSectionComponent;
  let fixture: ComponentFixture<ModalePostSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalePostSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalePostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
