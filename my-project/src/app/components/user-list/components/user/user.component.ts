import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/components/user-list/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user2.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  public user!: User;

  public disabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('init')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes)
  }

  public update(event: Event): void {
    this.disabled = true;
    console.log(event, this.user);
  }

}
