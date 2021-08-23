import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerDTO} from '../../models/CustomerDTO';
import {CustomerService} from '../../http-services/customer.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CustomerDTO,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {};
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.data.active = true;
    this.customerService.saveOrUpdate(this.data).subscribe(() => {
      this.dialogRef.close();
    })
  }

}
