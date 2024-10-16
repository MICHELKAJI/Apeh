import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangingAboutComponent } from './langing-about.component';

describe('LangingAboutComponent', () => {
  let component: LangingAboutComponent;
  let fixture: ComponentFixture<LangingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangingAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
