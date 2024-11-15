import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDonatComponent } from './dash-donat.component';

describe('DashDonatComponent', () => {
  let component: DashDonatComponent;
  let fixture: ComponentFixture<DashDonatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashDonatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashDonatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
