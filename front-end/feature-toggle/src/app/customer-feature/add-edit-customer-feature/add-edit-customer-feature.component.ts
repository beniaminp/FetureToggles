import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerFeatureService} from '../http-service/customer-feature.service';
import {CustomerToggle} from '../models/CustomerToggle';
import {CustomerService} from '../../customers/http-services/customer.service';
import {FeatureToggleService} from '../../feature/http-service/feature-toggle.service';
import {CustomerDTO} from '../../customers/models/CustomerDTO';
import {FeatureToggleDTO} from '../../feature/models/FeatureToggleDTO';
import {forkJoin} from 'rxjs';
import {CustomerFeatureToggleDTO} from '../models/CustomerFeatureToggleDTO';

@Component({
  selector: 'app-add-edit-customer-feature',
  templateUrl: './add-edit-customer-feature.component.html',
  styleUrls: ['./add-edit-customer-feature.component.css']
})
export class AddEditCustomerFeatureComponent implements OnInit {
  customers: CustomerDTO[];
  featureToggles: FeatureToggleDTO[];
  expiresOn: Date;
  selectedCustomer: CustomerDTO = {};
  selectedFeatureToggle: FeatureToggleDTO = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: CustomerToggle,
              public dialogRef: MatDialogRef<AddEditCustomerFeatureComponent>,
              private customerFeatureService: CustomerFeatureService,
              private customerService: CustomerService,
              private featureToggleService: FeatureToggleService) {
  }

  ngOnInit(): void {
    this.init();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    const customerFeatureToggleDTO: CustomerFeatureToggleDTO = {
      customerFeatureToggleId: this.data.id,
      customerId: this.selectedCustomer.id,
      featureToggleId: this.selectedFeatureToggle.id,
      expiresOn: this.expiresOn.getTime()
    };
    this.customerFeatureService.saveOrUpdate(customerFeatureToggleDTO).subscribe((res) => {
      this.dialogRef.close();
    })
  }

  private init() {
    if (!this.data) {
      this.data = {};
    }

    const httpArray = [
      this.customerService.findAllActive(),
      this.featureToggleService.findAllActive()
    ]
    if (this.data.id) {
      this.expiresOn = new Date(this.data.expiresOn);
      this.selectedCustomer = this.data.customer;
      this.selectedFeatureToggle = this.data.featureToggle;
    }
    forkJoin(httpArray).subscribe((res: any[]) => {
      this.customers = res[0];
      this.featureToggles = res[1];
    })
  }
}
