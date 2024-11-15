import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCollectComponent } from './dash-collect.component';

describe('DashCollectComponent', () => {
  let component: DashCollectComponent;
  let fixture: ComponentFixture<DashCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCollectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
