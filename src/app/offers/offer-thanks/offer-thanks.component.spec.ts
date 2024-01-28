import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferThanksComponent } from './offer-thanks.component';

describe('OfferThanksComponent', () => {
  let component: OfferThanksComponent;
  let fixture: ComponentFixture<OfferThanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferThanksComponent]
    });
    fixture = TestBed.createComponent(OfferThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
