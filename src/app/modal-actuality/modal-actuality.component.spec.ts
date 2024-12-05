import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualityComponent } from './modal-actuality.component';

describe('ModalActualityComponent', () => {
  let component: ModalActualityComponent;
  let fixture: ComponentFixture<ModalActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalActualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
