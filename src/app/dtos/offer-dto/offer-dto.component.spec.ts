import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDtoComponent } from './offer-dto.component';

describe('OfferDtoComponent', () => {
  let component: OfferDtoComponent;
  let fixture: ComponentFixture<OfferDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDtoComponent]
    });
    fixture = TestBed.createComponent(OfferDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
