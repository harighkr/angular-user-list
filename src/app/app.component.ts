import { Component } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser = {}
  filteredUserList = [];
  users = []
  table = {
    header: ['Likes', 'Dislikes'],
    body: []
  }
  constructor(private user_service: UserService) {
    this.users = this.user_service.getUsersList();
    console.log(this.users);
    this.filteredUserList = this.users;
    this.currentUser = this.users[0];
    this.creatingTableData();
  }

  public userChanged(updatedUserData) {
    this.currentUser = updatedUserData;
    this.creatingTableData();
  }


  public handleSearch(searchTerm) {
    this.filteredUserList = this.users.filter(u => u.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    this.currentUser = this.filteredUserList.length && this.filteredUserList[0];
    this.creatingTableData();
  }


  public creatingTableData() {
    const dataSet = [];
    const length = Math.max(this.currentUser['Likes'].length, this.currentUser['Dislikes'].length);
    for (let i = 0; i < length; i++) {
      dataSet.push([
        this.currentUser['Likes'][i] || '',
        this.currentUser['Dislikes'][i] || ''
      ])
    }
    this.table.body = dataSet;
  }
}
