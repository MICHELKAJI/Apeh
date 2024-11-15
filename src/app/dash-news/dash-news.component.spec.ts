import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNewsComponent } from './dash-news.component';

describe('DashNewsComponent', () => {
  let component: DashNewsComponent;
  let fixture: ComponentFixture<DashNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
