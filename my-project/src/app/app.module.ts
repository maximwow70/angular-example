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
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    AboutMeComponent,
    AboutUsComponent,
    SuperNotFoundComponent
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
export class AppModule { }
