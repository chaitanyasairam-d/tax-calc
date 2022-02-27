import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  // @Input() taxableIncome:number = 600000;
  @Input() below60:boolean = true;
  @Input() taxableIncome:number = 0;
  oldRegimeTaxPayable:number[]=[];
  oldRegimeSlab:number[]=[]
  oldRegimeGrossTotal:number = 0;
  oldRegimeNetTotal:number = 0;
  newRegimeGrossTotal:number = 0;
  newRegimeNetTotal:number = 0;
  old_tax_slabs:string[]=['1 to 250000','250001 to 500000','500001 to 1000000','Above 1000000' ]
  oldTaxSlabsAbove60:string[] = ['1 to 300000','300001 to 500000','500001 to 1000000','Above 1000000']
  newTaxSLabs:string[]=['1 to 250000','250001 to 500000','500001 to 750000','750001 to 1000000','1000001 to 1250000','1250001 to 1500000','Above 1500000'];
  old_regime_tax_rate:number[]=[0, 5, 20, 30];
  newTaxRate:number[]=[0, 5, 10, 15, 20, 25, 30];
  
  newRegimeTaxPayable:number[]=[];
  newRegimeSlabArr:number[]=[]
  constructor() {
   
  }
 
  ngOnInit() {
    console.log(this.below60)
  }


  initializeData(){
   
}
getTaxPayableDetails(){
  this.newRegimeGrossTotal = 0;
  this.oldRegimeGrossTotal = 0
  this.oldRegimeSlab = [];
    this.oldRegimeTaxPayable=[];
    this.newRegimeSlabArr = [];
    this.newRegimeTaxPayable = [];
    this.getTaxPayableForNewRegime();
  if(this.below60)
  this.getTaxPayableBelow60Details();
  else
  this.getTaxPayableAbove60Details();

}


getTaxPayableBelow60Details(){
  let income = this.taxableIncome;
  
  if(income < 250000)
  this.oldRegimeTaxPayable.push(0);
  else{
    this.oldRegimeSlab.push(250000);
    income -= 250000
    this.oldRegimeTaxPayable.push(0)
    if(income <= 250000){
      this.oldRegimeSlab.push(income)
      this.oldRegimeTaxPayable.push(0);
    } else {
      this.oldRegimeSlab.push(250000 )
      this.oldRegimeTaxPayable.push(250000 * 0.05);
      income -= 250000
      if(income <= 500000 ){
     
      this.oldRegimeSlab.push(income);
      this.oldRegimeTaxPayable.push((income) * 0.2 )
      } else {
        income-=500000
        this.oldRegimeSlab.push(500000 )
        this.oldRegimeTaxPayable.push(500000 * 0.2);
        this.oldRegimeSlab.push(income)
        this.oldRegimeTaxPayable.push((income) * 0.3);
      }
    }
  }

  for(let tax of this.oldRegimeTaxPayable)
  this.oldRegimeGrossTotal += tax
  
  this.oldRegimeNetTotal= this.oldRegimeGrossTotal + (this.oldRegimeGrossTotal * 0.04);

}


getTaxPayableAbove60Details(){
  let income = this.taxableIncome;
  
  if(income < 300000)
  this.oldRegimeTaxPayable.push(0);
  else{
    this.oldRegimeSlab.push(300000);
    income -= 300000
    this.oldRegimeTaxPayable.push(0)
    if(income <= 300000){
      this.oldRegimeSlab.push(income)
      this.oldRegimeTaxPayable.push(0);
    } else {
      this.oldRegimeSlab.push(200000 )
      this.oldRegimeTaxPayable.push(200000 * 0.05);
      income -= 200000
      if(income <= 500000 ){
     
      this.oldRegimeSlab.push(income);
      this.oldRegimeTaxPayable.push((income) * 0.2 )
      } else {
        income-=500000
        this.oldRegimeSlab.push(500000 )
        this.oldRegimeTaxPayable.push(500000 * 0.2);
        this.oldRegimeSlab.push(income)
        this.oldRegimeTaxPayable.push((income) * 0.3);
      }
    }
  }
  for(let tax of this.oldRegimeTaxPayable)
  this.oldRegimeGrossTotal += tax
  
  this.oldRegimeNetTotal= this.oldRegimeGrossTotal + (this.oldRegimeGrossTotal * 0.04);
}

getTaxPayableForNewRegime(){
  let income = this.taxableIncome;
  if(income < 250000){
    this.newRegimeSlabArr.push(income);
    this.newRegimeTaxPayable.push(0);
  } else {
    income -= 250000;
    this.newRegimeSlabArr.push(250000);
    this.newRegimeTaxPayable.push(0);
    if(income <= 250000){
      this.newRegimeSlabArr.push(income);
      this.newRegimeTaxPayable.push(income * 0.05);
    } else {
      income -= 250000;
      this.newRegimeSlabArr.push(250000);
      this.newRegimeTaxPayable.push(250000 * 0.05);
      if(income <= 250000){
        this.newRegimeSlabArr.push(income);
        this.newRegimeTaxPayable.push(income * 0.10);
      } else {
        income -= 250000;
        this.newRegimeSlabArr.push(250000);
        this.newRegimeTaxPayable.push(250000 * 0.10);
        if(income <= 250000){
          this.newRegimeSlabArr.push(income);
          this.newRegimeTaxPayable.push(income * 0.15);
        } else {
          income -= 250000;
          this.newRegimeSlabArr.push(250000);
          this.newRegimeTaxPayable.push(250000 * 0.15);
          if(income <= 250000){
            this.newRegimeSlabArr.push(income);
            this.newRegimeTaxPayable.push(income * 0.20);
          } else {
            income -= 250000;
            this.newRegimeSlabArr.push(250000);
            this.newRegimeTaxPayable.push(250000 * 0.20);
            if(income <= 250000){
              this.newRegimeSlabArr.push(income);
              this.newRegimeTaxPayable.push(income * 0.25);
            } else {
              income -= 250000;
              this.newRegimeSlabArr.push(250000);
              this.newRegimeTaxPayable.push(250000 * 0.25);
              if(income <= 250000){
                this.newRegimeSlabArr.push(income);
                this.newRegimeTaxPayable.push(income * 0.30);
              } else {
                this.newRegimeSlabArr.push(income);
                this.newRegimeTaxPayable.push(income * 0.30);
               
              }
            }
          }
        }
      }
    }
  }
  for(let tax of this.newRegimeTaxPayable)
  this.newRegimeGrossTotal += tax;

  this.newRegimeNetTotal = this.newRegimeGrossTotal + (this.newRegimeGrossTotal * 0.04)
}
}