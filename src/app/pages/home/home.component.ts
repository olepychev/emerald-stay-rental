import { Component, OnInit } from '@angular/core';
import { agencyFees, CalculatorFields } from '../../core/models/calculator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  agencyFees = agencyFees;
  mniFirst = 0;
  mniSecond = 0;
  mniFollow = 0;
  returnThreeYears = 0;

  fields: CalculatorFields = {
    annualRentalFee: 0,
    propertyValue: 0,
    rentAmount: 0,
  };

  constructor() { }

  ngOnInit(): void { }

  onPriceChange(value: CalculatorFields) {
    this.fields = value;
    // TODO: Add calculation logic here, with the value got from the calculator component
    this.mniFirst = this.fields.rentAmount - (this.fields.annualRentalFee / 12) - (this.fields.propertyValue * agencyFees[0].fee / 12);
    this.mniSecond = this.fields.rentAmount - (this.fields.annualRentalFee / 12) - (this.fields.propertyValue * agencyFees[1].fee / 12);
    this.mniFollow = this.fields.rentAmount - (this.fields.annualRentalFee / 12) - (this.fields.propertyValue * agencyFees[2].fee / 12);
    this.returnThreeYears = (this.mniFirst + this.mniSecond + this.mniFollow) * 12;
  }
}
