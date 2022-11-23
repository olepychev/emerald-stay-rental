import { Component, OnInit } from '@angular/core';
import { agencyFees, CalculatorFields } from '../../core/models/calculator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  agencyFees = agencyFees;
  fields: CalculatorFields = {
    annualRentalFee: 0,
    propertyValue: 0,
    rentAmount: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  onPriceChange(value: CalculatorFields) {
    this.fields = value;
    // TODO: Add calculation logic here, with the value got from the calculator component
  }
}
