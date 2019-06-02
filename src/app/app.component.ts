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
    new Quotes(1, 'The Way Get Started Is To Quit Talking And Begin Doing.', ' Walt Disney', "mango J", new Date(3, 30, 2019)),
    new Quotes(2, 'Don’t Let Yesterday Take Up Too Much Of Today.', 'Will Rodgers', "Junior M", new Date(1, 4, 2019)),
  ]
}
