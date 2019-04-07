import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';

import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
})
export class SharedModule { }
