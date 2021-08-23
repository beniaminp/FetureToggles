import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeatureComponentComponent } from './customer-feature-component.component';

describe('CustomerFeatureComponentComponent', () => {
  let component: CustomerFeatureComponentComponent;
  let fixture: ComponentFixture<CustomerFeatureComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFeatureComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
