import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCvSearchComponent } from './supplier-cv-search.component';

describe('SupplierCvSearchComponent', () => {
  let component: SupplierCvSearchComponent;
  let fixture: ComponentFixture<SupplierCvSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCvSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
