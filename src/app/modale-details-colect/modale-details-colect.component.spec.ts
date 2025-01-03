import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleDetailsColectComponent } from './modale-details-colect.component';

describe('ModaleDetailsColectComponent', () => {
  let component: ModaleDetailsColectComponent;
  let fixture: ComponentFixture<ModaleDetailsColectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleDetailsColectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaleDetailsColectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
