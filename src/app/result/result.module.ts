import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,ModalModule
  ],
  exports:[ResultComponent]
})
export class ResultModule { }
