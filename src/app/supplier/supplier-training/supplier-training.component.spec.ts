import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTrainingComponent } from './supplier-training.component';

describe('SupplierTrainingComponent', () => {
  let component: SupplierTrainingComponent;
  let fixture: ComponentFixture<SupplierTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
