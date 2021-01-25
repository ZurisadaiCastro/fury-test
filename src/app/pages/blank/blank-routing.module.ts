import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from "./BlankComponent";
import { FileUploadModule } from 'ng2-file-upload';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),

    FileUploadModule, 
    MatProgressBarModule,
    // NgxMatFileInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule
  ],
  
  
  exports: [RouterModule],
  })
export class BlankRoutingModule {

}
