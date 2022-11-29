import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayToCsvPipe } from './pipes/array-to-csv.pipe';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ArrayToCsvPipe,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,

    // Material Imports
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ArrayToCsvPipe
  ]
})
export class SharedModule { }
