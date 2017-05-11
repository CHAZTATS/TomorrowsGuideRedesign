import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRecruitmentComponent } from './supplier-recruitment.component';

describe('SupplierRecruitmentComponent', () => {
  let component: SupplierRecruitmentComponent;
  let fixture: ComponentFixture<SupplierRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
