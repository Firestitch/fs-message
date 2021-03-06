import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fs-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsMessageDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FsMessageDialogComponent>,
  ) {}

  public hide() {
    this.dialogRef.close();
  }

  public buttonClick(button) {
    if (button.click) {
      button.click();
    }

    this.hide();
  }
}
