import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangingActualityComponent } from './langing-actuality.component';

describe('LangingActualityComponent', () => {
  let component: LangingActualityComponent;
  let fixture: ComponentFixture<LangingActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangingActualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangingActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
