import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _userNameList: string[] = [
    'Mike',
    'Misha',
    'Vadzim',
    'Slava',
    'Alexander',
    'Oleg'
  ];

  public user: User = new User(
    Math.round(Math.random() * 9),
    this._userNameList[
      Math.round(Math.random() * 5)
    ],
    Math.random() > 0.5
  );

  public isUserSelected: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectUser(user: User): void {
    this.isUserSelected = true;
    console.log(`user selected: ${this.user.id} ${this.user.name}`);
  }

}
