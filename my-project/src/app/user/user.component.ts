import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  @Input()
  public user: User;

  @Input()
  public index: number;

  public isUserSelected: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectUser(): void {
    this.isUserSelected = true;
    console.log(`user selected: ${this.user.id} ${this.user.name}`);
  }

}
