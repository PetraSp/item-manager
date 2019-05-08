import { NgModule } from '@angular/core';

import {
  MatCardModule
} from '@angular/material/card';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
