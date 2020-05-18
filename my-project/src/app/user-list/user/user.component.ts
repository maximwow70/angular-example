import { Component, ViewEncapsulation, ChangeDetectionStrategy, EventEmitter, Output, HostListener, HostBinding, Input } from '@angular/core';
import { User } from '../_models/user';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: max-line-length
export class UserComponent {

  public myUser: User = null;

  public isEditMode: boolean = false;

  @Input()
  public set user(user: User) {
    this.myUser = user;
  }

  public get user(): User {
    return this.myUser;
  }

  @Input()
  public index: number = null;

  @Input()
  public isUserSelected: boolean = false;

  @Input() newTemplate: HTMLElement = null;

  @Output()
  public onUserSelect: EventEmitter<User> = new EventEmitter<User>();

  public updateUserInterval: any = null;

  constructor() {
  }

  public toggleMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  @HostListener('click')
  public selectUser(): void {
    this.onUserSelect.emit(this.user);
  }

  @HostBinding('style.cursor')
  public get cursor(): string {
    return 'pointer';
  }

}
