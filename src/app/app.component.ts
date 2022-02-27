import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tax-calculator';
  hra:number = 0;
  taxableIncome:number = 0;
  below60:boolean = true;

  getInputs(event:any){
    this.taxableIncome = event.income;
    this.below60 = event.age < 60?true:false;
  }
}
