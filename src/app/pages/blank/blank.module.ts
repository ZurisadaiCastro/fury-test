import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from "./BlankComponent";
import { FurySharedModule } from '../../../@fury/fury-shared.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileUploadModule } from 'ng2-file-upload';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  imports: [
    CommonModule,
    BlankRoutingModule,
    FurySharedModule,
    MatProgressBarModule,
    FileUploadModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    MatGridListModule,
    MatTableModule,
    BrowserModule,
    // MatFileUploadModule
  ],

  declarations: [BlankComponent]
  
})
export class BlankModule {
}
