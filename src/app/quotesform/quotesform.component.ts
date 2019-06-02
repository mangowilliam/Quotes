import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotesform',
  templateUrl: './quotesform.component.html',
  styleUrls: ['./quotesform.component.css']
})
export class QuotesformComponent implements OnInit {
  newquotes = new Quotes(0, "", "", "", new Date());
  @Output() addquotes = new EventEmitter<Quotes>();

  submitquotes() {
    this.addquotes.emit(this.newquotes);

  }
  constructor() { }

  ngOnInit() {
  }

}
