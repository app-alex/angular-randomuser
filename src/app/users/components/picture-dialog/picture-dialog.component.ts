import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-picture-dialog',
  templateUrl: './picture-dialog.component.html',
})
export class PictureDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { picture: string }) {}
}
