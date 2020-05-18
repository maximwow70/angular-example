import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list.component';
import { CustomTitleDirective } from './custom-title/custom-title.directive';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    CustomTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
