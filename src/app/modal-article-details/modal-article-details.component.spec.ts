import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArticleDetailsComponent } from './modal-article-details.component';

describe('ModalArticleDetailsComponent', () => {
  let component: ModalArticleDetailsComponent;
  let fixture: ComponentFixture<ModalArticleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalArticleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
