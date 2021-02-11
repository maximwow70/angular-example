import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AboutUsGuardGuard } from './guards/about-us-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/:id',
    component: UserListComponent
  },
  {
    path: 'contacts',
    loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'us',
        component: AboutMeComponent,
        canActivate: [AboutUsGuardGuard]
      },
      {
        path: 'me',
        component: AboutUsComponent
      },
      {
        path: '',
        redirectTo: 'us',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'us'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
