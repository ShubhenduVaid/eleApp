import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailData } from '../detail.model';

@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent {

  isValid: boolean;
  constructor(
    public dialogRef: MatDialogRef<DetailEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailData
  ) { }

  onCancel(): void {
    this.dialogRef.close('Cancel');
  }

  onEdit(): void {
    if (this.data.elevatorCode.trim().length <= 0) {
      this.isValid = false;
    } else {
      this.isValid = true;
      this.dialogRef.close(this.data);
    }
  }
}
