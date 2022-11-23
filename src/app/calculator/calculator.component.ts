import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalculatorFields } from '../core/models/calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @Output() priceChanges: EventEmitter<CalculatorFields> = new EventEmitter<CalculatorFields>();

  form: FormGroup = this.fb.group({
    propertyValue: [0],
    rentAmount: [0],
    annualRentalFee: [0],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.priceChanges.next(value);
    });
  }
}
