import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListDataService } from './services/user-list-data/user-list-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './services/user-list/user-list.service';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [UserListComponent, UserComponent, UserCardComponent, UserAvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserListDataService, UserListService],
  exports: [UserListComponent]
})
export class UserListModule { }
