import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './sharedialog.component.html',
  styleUrls: ['./sharedialog.component.css']
})
export class SharedialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SharedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
