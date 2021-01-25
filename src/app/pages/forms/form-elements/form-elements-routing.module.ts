import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements.component';


const routes: Routes = [
  {
    path: '',
    component: FormElementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule
          ],
  exports: [RouterModule]
})
export class FormElementsRoutingModule {
}
