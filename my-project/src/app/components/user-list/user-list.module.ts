import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [UserListComponent, UserComponent, UserCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
