import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IncomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot() ,
    FontAwesomeModule
  ],
  exports:[IncomeComponent]
})
export class IncomeModule { }
