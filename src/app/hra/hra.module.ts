import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HraComponent } from './hra/hra.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[HraComponent]
})
export class HraModule { }
