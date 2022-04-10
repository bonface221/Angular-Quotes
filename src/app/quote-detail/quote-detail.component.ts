import { Component, OnInit,Input} from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from '../Quote';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  up = faArrowUp;
  down = faArrowDown;
  deleting= faTrash
  
  @Input() quote: Quote;

  

  constructor() { 
    
    
  }
  
  
  ngOnInit(): void {
  }
  upvote() {
    this.quote.upvotes++
  }

  downvote() {
    this.quote.downvotes++
  }
  deleteWhole() {
    let a = document.querySelector(".wholeQuote");
    
    
  }
 

}

