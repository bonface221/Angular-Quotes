import { Component } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  faQuote = faQuoteLeft;
  faSearch = faSearch;
}
