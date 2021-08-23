import {Component, OnInit} from '@angular/core';
import {CustomerFeatureService} from '../http-service/customer-feature.service';
import {CustomerFeaturesTree} from '../models/CustomerFeaturesTree';
import {MatDialog} from '@angular/material/dialog';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {AddEditCustomerFeatureComponent} from '../add-edit-customer-feature/add-edit-customer-feature.component';
import {CustomerToggle} from '../models/CustomerToggle';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-feature-component',
  templateUrl: './customer-feature-component.component.html',
  styleUrls: ['./customer-feature-component.component.css']
})
export class CustomerFeatureComponentComponent implements OnInit {
  treeControl = new NestedTreeControl<CustomerFeaturesTree>(node => node.featureLeafList);
  dataSource = new MatTreeNestedDataSource<CustomerFeaturesTree>();

  constructor(private customerFeatureService: CustomerFeatureService,
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

  edit(customerToggleId: number) {
    let dialogRef;
    this.customerFeatureService.findById(customerToggleId).pipe(
      switchMap((res: any) => {
        dialogRef = this.openDialog(res);
        return dialogRef.afterClosed();
      })
    ).subscribe(result => {
      this.init();
    });
  }

  deleteCustomer(id: number) {
    this.customerFeatureService.delete(id).subscribe(() => {
      this.init();
    })
  }

  delete(id: number) {
    this.customerFeatureService.delete(id).subscribe(() => {
      this.init();
    })
  }

  hasChild = (_: number, node: CustomerFeaturesTree) => !!node.featureLeafList && node.featureLeafList.length > 0;

  private openDialog(customerToggle?: CustomerToggle) {
    return this.dialog.open(AddEditCustomerFeatureComponent, {
      width: '450px',
      data: customerToggle
    });
  }

  private init() {
    this.customerFeatureService.findAllActive().subscribe(value => {
      this.dataSource.data = value;
    })
  }
}
