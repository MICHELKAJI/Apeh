import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCausesComponent } from './page-causes.component';

describe('PageCausesComponent', () => {
  let component: PageCausesComponent;
  let fixture: ComponentFixture<PageCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCausesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
