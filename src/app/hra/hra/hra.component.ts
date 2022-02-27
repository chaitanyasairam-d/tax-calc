import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hra',
  templateUrl: './hra.component.html',
  styleUrls: ['./hra.component.scss']
})
export class HraComponent implements OnInit {
  @Output() hraExemption = new EventEmitter<number>();
  MonthlyBasicDA:any;
  YearlyBasicDA:any = 0;

  MonthlyHRA:any;
  YearlyHRA:any = 0;
  
  MonthlyRENT:any;
  YearlyRENT:any = 0;

  HRAReceived:any = 0;

  ActualRent:any = 0;

  Exemption:any = 0;

  constructor() { }

  ngOnInit(): void {
  }
  calculateHRA(){
    this.YearlyBasicDA = this.MonthlyBasicDA * 12;
    this.YearlyHRA = this.MonthlyHRA * 12;
    this.YearlyRENT = this.MonthlyRENT * 12;
    this.HRAReceived = this.YearlyHRA;
    this.ActualRent = this.YearlyRENT - (this.YearlyBasicDA * 0.1)
    this.Exemption = this.ActualRent
    this.hraExemption.emit(this.Exemption)
  }
}
