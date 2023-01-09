import { User } from './../../models/user';
import { Component, Input } from '@angular/core';
import { PictureDialogComponent } from '../picture-dialog/picture-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() public user!: User;

  constructor(private matDialog: MatDialog) {}

  public openPictureModalDialog() {
    this.matDialog.open(PictureDialogComponent, {
      data: { picture: this.user.picture.large },
    });
  }
}
