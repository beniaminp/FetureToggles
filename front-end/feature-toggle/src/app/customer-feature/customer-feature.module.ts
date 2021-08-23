import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerFeatureComponentComponent} from './customer-feature-component/customer-feature-component.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {AddEditCustomerFeatureComponent} from './add-edit-customer-feature/add-edit-customer-feature.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerFeatureComponentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer-features',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CustomerFeatureComponentComponent, AddEditCustomerFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule

  ]
})
export class CustomerFeatureModule {
}
