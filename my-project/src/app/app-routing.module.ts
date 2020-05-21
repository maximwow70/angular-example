import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CanProceedToContactsGuard } from './_guards/can-proceed-to-contacts.guard';
import { SuperNotFoundComponent } from './super-not-found/super-not-found.component';


const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [CanProceedToContactsGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'me',
        component: AboutMeComponent
      },
      {
        path: 'us',
        component: AboutUsComponent
      }
    ]
  },
  {
    path: '**',
    component: SuperNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
