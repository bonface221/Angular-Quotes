import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = QUOTES;
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
