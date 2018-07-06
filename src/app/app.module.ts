import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableComponent } from './components/table/table.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TableComponent,
    UserDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
