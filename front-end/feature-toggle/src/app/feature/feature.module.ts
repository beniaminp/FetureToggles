import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureComponentComponent} from './feature-component/feature-component.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AddEditFeatureComponent } from './feature-component/add-edit-feature/add-edit-feature.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FeatureComponentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/feature',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    FeatureComponentComponent,
    AddEditFeatureComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureModule {
}
