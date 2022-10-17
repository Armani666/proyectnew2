import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import { AlumnosComponent } from '../alumnos/alumnos.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UtlModule { }
