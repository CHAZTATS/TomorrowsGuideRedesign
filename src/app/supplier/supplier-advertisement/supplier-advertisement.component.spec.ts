import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAdvertisementComponent } from './supplier-advertisement.component';

describe('SupplierAdvertisementComponent', () => {
  let component: SupplierAdvertisementComponent;
  let fixture: ComponentFixture<SupplierAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
