import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSectionEventComponent } from './first-section-event.component';

describe('FirstSectionEventComponent', () => {
  let component: FirstSectionEventComponent;
  let fixture: ComponentFixture<FirstSectionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSectionEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSectionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
