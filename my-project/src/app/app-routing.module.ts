import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CanProceedToContactsGuard } from './guards/can-proceed-to-contacts.guard';
import { SuperNotFoundComponent } from './components/super-not-found/super-not-found.component';
import { PipesPresentationComponent } from './components/pipes-presentation/pipes-presentation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NgrxPresentationComponent } from './components/ngrx-presentation/ngrx-presentation.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'not-found',
    loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule)
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
    path: 'pipes',
    component: PipesPresentationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'ngrx',
    component: NgrxPresentationComponent
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
