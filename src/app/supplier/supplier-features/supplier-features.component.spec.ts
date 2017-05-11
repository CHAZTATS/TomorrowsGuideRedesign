import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFeaturesComponent } from './supplier-features.component';

describe('SupplierFeaturesComponent', () => {
  let component: SupplierFeaturesComponent;
  let fixture: ComponentFixture<SupplierFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
