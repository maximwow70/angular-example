import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPhotoComponent } from './user-photo/user-photo.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserListComponent,
    children: [
        {
            path: 'details',
            component: UserDetailsComponent
        },
        {
            path: 'photo',
            component: UserPhotoComponent
        }
    ]
  },
  {
    path: 'user-list',
    redirectTo: '/users',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule {}
