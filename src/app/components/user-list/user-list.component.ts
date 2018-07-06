import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{

  @Output() userClick: EventEmitter<object> = new EventEmitter();

  @Input() users;
  constructor() { }

  public userClicked(user){
    this.userClick.emit(user);
    // console.log(user);
  }

}
