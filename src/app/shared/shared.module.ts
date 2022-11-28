import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayToCsvPipe } from './pipes/array-to-csv.pipe';



@NgModule({
  declarations: [
    ArrayToCsvPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArrayToCsvPipe
  ]
})
export class SharedModule { }
