import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, TemplateRef, OnChanges } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input()
  public user!: User;

  @Input()
  public newTemplate!: TemplateRef<HTMLElement> | undefined;

  @Output()
  public userClick: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  public click(): void {
    this.userClick.emit(this.user);
  }

  @HostBinding('title')
  public get title(): string {
    return 'user card';
  }

}
