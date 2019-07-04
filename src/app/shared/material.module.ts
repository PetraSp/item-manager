import {
  NgModule,
} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRippleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
