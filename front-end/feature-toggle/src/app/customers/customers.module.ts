import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerComponentComponent} from './customer-component/customer-component.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AddEditCustomerComponent} from './customer-component/add-edit-customer/add-edit-customer.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerComponentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CustomerComponentComponent, AddEditCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class CustomersModule {
}
