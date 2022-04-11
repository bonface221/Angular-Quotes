import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  faUser = faUser;
  faQuote = faQuoteLeft;
  faTime =faClock

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    console.log(`hello there`)
      
    
  }
  onSubmit() {
    console.log(`submitted`);
    
  }

}
