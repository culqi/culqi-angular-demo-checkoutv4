import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulqiCheckoutComponent } from './culqi-checkout.component';

describe('CulqiCheckoutComponent', () => {
  let component: CulqiCheckoutComponent;
  let fixture: ComponentFixture<CulqiCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulqiCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulqiCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
