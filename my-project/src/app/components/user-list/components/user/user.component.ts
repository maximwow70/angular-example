import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/components/user-list/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user2.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit {

  public user: User = new User(3, 'Elon Musk');

  public disabled: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public update(event: Event): void {
    console.log(event, this.user);
  }

}
