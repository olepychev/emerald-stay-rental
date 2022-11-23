import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  agencyFees = [
    { year: '1st year', fee: 0.3 },
    { year: '2nd year', fee: 0.25 },
    { year: 'following years', fee: 0.2 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
