import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomerFeatureComponent } from './add-edit-customer-feature.component';

describe('AddEditCustomerFeatureComponent', () => {
  let component: AddEditCustomerFeatureComponent;
  let fixture: ComponentFixture<AddEditCustomerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCustomerFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustomerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
