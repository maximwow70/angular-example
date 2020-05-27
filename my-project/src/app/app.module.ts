import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListModule } from './user-list/user-list.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { UserListRoutingModule } from './user-list/user-list-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CanProceedToContactsGuard } from './_guards/can-proceed-to-contacts.guard';
import { SuperNotFoundComponent } from './super-not-found/super-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { PipesPresentationComponent } from './pipes-presentation/pipes-presentation.component';

import ru from '@angular/common/locales/ru';
import ar from '@angular/common/locales/ar';

import { registerLocaleData } from '@angular/common';
import { CustomReversePipe } from './custom-reverse.pipe';

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
    CustomReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserListModule,
    AppRoutingModule
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
