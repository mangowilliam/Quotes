import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes(1, 0, 0, 'The Way To Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J", new Date(2019, 4, 30)),
    new Quotes(2, 0, 0, 'Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M", new Date(2019, 4, 20)),
  ]
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewquotes(quotes) {
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    quotes.Date = new Date(quotes.Date)
    this.quotes.push(quotes)
  }
  deletequotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
