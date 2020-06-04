import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListModule } from './components/user-list/user-list.module';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CanProceedToContactsGuard } from './guards/can-proceed-to-contacts.guard';
import { SuperNotFoundComponent } from './components/super-not-found/super-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PipesPresentationComponent } from './components/pipes-presentation/pipes-presentation.component';

import ru from '@angular/common/locales/ru';
import ar from '@angular/common/locales/ar';

import { registerLocaleData } from '@angular/common';
import { CustomReversePipe } from './pipes/custom-reverse/custom-reverse.pipe';
import { NgrxPresentationComponent } from './components/ngrx-presentation/ngrx-presentation.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { counterReducer } from './store/reducers/counter.reducers';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    AboutMeComponent,
    AboutUsComponent,
    SuperNotFoundComponent,
    RegistrationComponent,
    PipesPresentationComponent,
    CustomReversePipe,
    NgrxPresentationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserListModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [AppComponent],
  providers: [
    CanProceedToContactsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    [ru, ar].forEach(registerLocaleData);
  }
}
