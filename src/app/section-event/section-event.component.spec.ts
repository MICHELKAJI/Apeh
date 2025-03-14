import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEventComponent } from './section-event.component';

describe('SectionEventComponent', () => {
  let component: SectionEventComponent;
  let fixture: ComponentFixture<SectionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
