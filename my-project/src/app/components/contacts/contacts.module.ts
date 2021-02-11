import { NgModule } from "@angular/core";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    ContactsRoutingModule
  ]
})
export class ContactsModule {
    constructor () {
        console.log('qweqweqweqe');
    }
}
