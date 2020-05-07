import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User = new User('1', 'Mike');

  public isUserSaved: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(user: User): void {
    this.isUserSaved = true;
  }

  public canSave(): boolean {
    return this.user
      && Boolean(this.user.name);
  }

  public userChanged(event: Event): void {
    this.isUserSaved = false;
  }

}
