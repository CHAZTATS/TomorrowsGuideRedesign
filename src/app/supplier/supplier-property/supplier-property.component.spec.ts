import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPropertyComponent } from './supplier-property.component';

describe('SupplierPropertyComponent', () => {
  let component: SupplierPropertyComponent;
  let fixture: ComponentFixture<SupplierPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
