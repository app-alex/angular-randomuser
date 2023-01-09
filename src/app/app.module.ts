import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/components/user/user.component';
import { PictureDialogComponent } from './users/components/picture-dialog/picture-dialog.component';
import { FiltersComponent } from './users/components/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PageSelectorComponent } from './users/components/page-selector/page-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PictureDialogComponent,
    FiltersComponent,
    PageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  entryComponents: [PictureDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
