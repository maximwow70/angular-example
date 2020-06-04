import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [
      NotFoundComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [NotFoundComponent]
})
export class NotFoundModule { }
