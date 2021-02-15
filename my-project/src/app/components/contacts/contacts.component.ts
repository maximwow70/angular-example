import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public email: string = '';
  public message: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  public submit(): void {
    console.log({ email: this.email, message: this.message });
  }

  public cancel(): void {
    console.log('cancel');
  }

}
