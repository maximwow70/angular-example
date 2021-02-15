import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts.component";

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    ContactsRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class ContactsModule {
    constructor () {
        console.log('qweqweqweqe');
    }
}
