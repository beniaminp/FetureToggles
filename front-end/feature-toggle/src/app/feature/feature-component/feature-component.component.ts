import {Component, OnInit, ViewChild} from '@angular/core';
import {FeatureToggleService} from '../http-service/feature-toggle.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddEditFeatureComponent} from './add-edit-feature/add-edit-feature.component';
import {FeatureToggleDTO} from '../models/FeatureToggleDTO';

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['displayName', 'technicalName', 'expiresOn', 'description', 'inverted', 'actions'];

  dataSource: MatTableDataSource<FeatureToggleDTO>;

  constructor(private featureToggleService: FeatureToggleService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.init();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addData() {
    const dialogRef = this.openDialog();
    dialogRef.afterClosed().subscribe(result => {
      this.init();
    });
  }

  edit(featureToggleDTO: FeatureToggleDTO) {
    const dialogRef = this.openDialog(featureToggleDTO);

    dialogRef.afterClosed().subscribe(result => {
      this.init();
    });
  }

  delete(id: number) {
    this.featureToggleService.delete(id).subscribe(() => {
      this.init();
    })
  }

  private openDialog(featureToggleDTO?: FeatureToggleDTO) {
    return this.dialog.open(AddEditFeatureComponent, {
      width: '450px',
      data: featureToggleDTO
    });
  }

  private init() {
    this.featureToggleService.findAllActive().subscribe(result => {
      this.dataSource = new MatTableDataSource<FeatureToggleDTO>(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
