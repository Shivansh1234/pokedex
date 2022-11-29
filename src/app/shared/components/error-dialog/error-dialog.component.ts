import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogResultData } from '../../models/dialog-result-data';
import { ErrorDialogData } from '../../models/error-dialog-data';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorDialogData) { }
  
  onClose(): DialogResultData {
    return {
      hasInteracted: true,
      success: true
    };
  }
}
