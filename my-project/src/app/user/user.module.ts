import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomTitleDirective } from './custom-title/custom-title.directive';
import { FormsModule } from '@angular/forms';



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
export class UserModule { }
