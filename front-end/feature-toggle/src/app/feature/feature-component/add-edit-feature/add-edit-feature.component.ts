import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeatureToggleService} from '../../http-service/feature-toggle.service';
import {FeatureToggleDTO} from '../../models/FeatureToggleDTO';

@Component({
  selector: 'app-add-edit-feature',
  templateUrl: './add-edit-feature.component.html',
  styleUrls: ['./add-edit-feature.component.css']
})
export class AddEditFeatureComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditFeatureComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FeatureToggleDTO,
              private fb: FormBuilder,
              private featureToggleService: FeatureToggleService) {
  }

  ngOnInit(): void {
    if (!this.data) {
      this.data = {};
    }
    this.form = this.fb.group({
      displayName: [this.data.displayName, Validators.required],
      technicalName: [this.data.technicalName, Validators.required],
      expiresOn: [new Date(this.data.expiresOn), Validators.required],
      description: [this.data.description, Validators.required],
      inverted: [this.data.inverted, Validators.required],
    });
  }

  onSubmit() {
    let customerFeatureToggleDTO = this.form.getRawValue() as FeatureToggleDTO;
    customerFeatureToggleDTO = this.populateExistingFields(customerFeatureToggleDTO);

    this.featureToggleService.saveOrUpdate(customerFeatureToggleDTO)
      .subscribe(res => this.dialogRef.close(res));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private populateExistingFields(featureToggleDTO: FeatureToggleDTO): FeatureToggleDTO {
    if (this.data) {
      featureToggleDTO.active = this.data.active;
      featureToggleDTO.id = this.data.id;
    }
    featureToggleDTO.active = true;
    featureToggleDTO.expiresOn = Date.parse(String(featureToggleDTO.expiresOn));
    return featureToggleDTO;
  }

}
