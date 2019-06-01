import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']

})
export class QuotesDetailsComponent implements OnInit {
  quotesDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
