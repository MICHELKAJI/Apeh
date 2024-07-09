import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCharityComponent } from './event-charity.component';

describe('EventCharityComponent', () => {
  let component: EventCharityComponent;
  let fixture: ComponentFixture<EventCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCharityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
