import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangingEventComponent } from './langing-event.component';

describe('LangingEventComponent', () => {
  let component: LangingEventComponent;
  let fixture: ComponentFixture<LangingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
