import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CustomerService} from '../http-services/customer.service';
import {CustomerDTO} from '../models/CustomerDTO';
import {AddEditCustomerComponent} from './add-edit-customer/add-edit-customer.component';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
  dataSource: CustomerDTO[];

  constructor(private customerService: CustomerService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.init();
  }

  addData() {
    const dialogRef = this.openDialog();
    dialogRef.afterClosed().subscribe(result => {
      this.init();
    });
  }

  editData(customer: CustomerDTO) {
    const dialogRef = this.openDialog(customer);

    dialogRef.afterClosed().subscribe(result => {
      this.init();
    });
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(() => {
      this.init();
    })
  }

  private init() {
    this.customerService.findAllActive().subscribe(value => {
      this.dataSource = value;
    })
  }

  private openDialog(customerDTO?: CustomerDTO) {
    return this.dialog.open(AddEditCustomerComponent, {
      width: '450px',
      data: customerDTO
    });
  }
}
