import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchClick: EventEmitter<string> = new EventEmitter();

  query: string;

  constructor() { }

  public searchClicked(){
    this.searchClick.emit(this.query);
  }
  public clearSearch(){
    this.query = '';
    this.searchClick.emit(this.query);
  }


}
