import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './user-list.component';
import { CustomTitleDirective } from './directives/custom-title/custom-title.directive';
import { UserListService } from './services/user-list/user-list.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListDataService } from './services/user-list-data/user-list-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { RouterModule } from '@angular/router';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    CustomTitleDirective,
    UserDetailsComponent,
    UserPhotoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    UserListRoutingModule
  ],
  providers: [
    UserListService,
    UserListDataService
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
