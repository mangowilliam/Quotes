import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes('The Way Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J", new Date(2019, 3, 30)),
    new Quotes('Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M", new Date(2019, 4, 1)),
  ]
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
