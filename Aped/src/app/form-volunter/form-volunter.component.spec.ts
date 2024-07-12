import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVolunterComponent } from './form-volunter.component';

describe('FormVolunterComponent', () => {
  let component: FormVolunterComponent;
  let fixture: ComponentFixture<FormVolunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVolunterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
