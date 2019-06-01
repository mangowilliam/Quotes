import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('The Way Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J"),
    new Quotes('Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
