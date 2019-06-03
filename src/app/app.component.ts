import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titile = "quotes"
  quotes = [
    new Quotes(1, 0, 0, 'The Way To Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J", new Date(3, 2019, 30)),
    new Quotes(2, 0, 0, 'Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M", new Date(1, 4, 2019)),
  ]
}
