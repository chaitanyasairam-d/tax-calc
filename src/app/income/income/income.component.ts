import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  @Input() Inputhra:number = 0;
  @Output() setOutput = new EventEmitter<any>();
  /** Icons */
  faInfoCircle = faInfoCircle;

  age:any = null;
  totalIncome: any = null;
  lifeInsurance:any = null;
  unitInsurance: any = null;
  elss: any = null;
  childTutionFee: any = null;
  epfOrnps: any = null;
  ppf: any = null;
  ssy: any = null;
  FD: any = null;
  NSC: any = null;
  homeLoan: any = null;

  GrossUNDER80C: any = null;
  NetUNDER80C: any = null;

  NPSCCD: any = null;

  educationLoan: any = null;
  homeLoanInterest: any = null;

  selfInsurance: any = null;
  parentsInsurance: any = null;

  section80D:any = null;

  homeLoan24B: any = null;
  EVInterest: any = null;
  standardDeduction: any = null;
  LTA: any = null;
  OTHERS: any = null;

  totalDeduction:any = null;

  netTaxableIncome:any = null;



  constructor() { }

  ngOnInit(): void {
  }

  getGrossUnder80C() {
    let val = this.lifeInsurance + this.unitInsurance + this.elss + this.childTutionFee + this.epfOrnps + this.ppf + this.ssy + this.FD + this.NSC + this.homeLoan;
    this.GrossUNDER80C = (val> 150000) ? 150000 :val
  }
  getNetUNDER80C() {
    let val = this.lifeInsurance + this.unitInsurance + this.elss + this.childTutionFee + this.epfOrnps + this.ppf + this.ssy + this.FD + this.NSC + this.homeLoan + this.NPSCCD;
    this.NetUNDER80C = (val> 150000) ? 150000 :val
  }

  getSection80D(){
   let maxSelfInsurance =  ((this.selfInsurance == 0) || (this.selfInsurance == null))?0:this.selfInsurance > 25000?25000:this.selfInsurance;
   let maxParentInsurance = ((this.parentsInsurance == 0) || (this.parentsInsurance == null))?0:this.parentsInsurance > 50000?50000:this.parentsInsurance;
   
   this.section80D = maxSelfInsurance + maxParentInsurance
  }
  getTotalDeduction(){
    this.totalDeduction = this.NetUNDER80C + this.NPSCCD + this.Inputhra + this.educationLoan + this.homeLoanInterest + this.section80D + this.homeLoan24B + this.EVInterest +  this.standardDeduction + this.LTA + this.OTHERS;
  }
  getNetTaxableIncome(){
    if(this.totalIncome > 0)
    this.netTaxableIncome = this.totalIncome - this.totalDeduction;
    else if (this.totalDeduction == 0)
    this.netTaxableIncome =  this.totalIncome
  }
  calculateTax(){
    this.getGrossUnder80C()
    this.getNetUNDER80C()
    this.getSection80D();
    this.getTotalDeduction()
    this.getNetTaxableIncome()
    this.setOutput.emit({income:this.netTaxableIncome,age:this.age})
  }



}
