import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('The Way Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J", new Date(2019, 5, 30)),
    new Quotes('Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M", new Date(2019, 6, 1)),
  ]

  constructor() { }

  ngOnInit() {
  }

}
