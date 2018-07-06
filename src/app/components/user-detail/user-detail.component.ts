import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnChanges {

  @Input() user;
  rating = [];
  constructor() { }
  ngOnChanges() {
    this.rating = [];
    for (let i = 0; i < 5; i++) {
      if (this.user.rating > i) {
        this.rating.push(true)
      }else{
        this.rating.push(false)
      }
    }
  }
}
