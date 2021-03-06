import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PipesPresentationComponent } from './components/pipes-presentation/pipes-presentation.component';
import { UserListModule } from './components/user-list/user-list.module';
import { AboutUsGuardGuard } from './guards/about-us-guard.guard';
import { PermissionService } from './services/permission-service/permission-service.service';

import ru from '@angular/common/locales/ru';
import ar from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserListStoreModule } from './components/user-list/store/store.module';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AboutMeComponent,
    AboutUsComponent,
    PipesPresentationComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserListModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PermissionService, AboutUsGuardGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
  constructor() {
    [ru, ar].forEach(registerLocaleData);
  }
}
