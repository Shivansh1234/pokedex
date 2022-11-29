import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ErrorDialogData } from '../models/error-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogConfigService {

  constructor() { }

  getErrorDialogConfig(error: HttpErrorResponse, title: string): MatDialogConfig {
    const errorData: ErrorDialogData = {
      title: title,
      status: error.status,
      message: error.error
    };
    const dialogConfig: MatDialogConfig = {
      width: '',
      height: '',
      data: errorData
    };
    return dialogConfig;
  }
}
