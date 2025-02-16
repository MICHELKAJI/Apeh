import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonFlotingComponent } from './bouton-floting.component';

describe('BoutonFlotingComponent', () => {
  let component: BoutonFlotingComponent;
  let fixture: ComponentFixture<BoutonFlotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonFlotingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonFlotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
