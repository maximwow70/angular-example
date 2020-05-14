import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, OnChanges, SimpleChange, SimpleChanges, HostListener, HostBinding, Output, ChangeDetectionStrategy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { User } from './user';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: max-line-length
export class UserComponent  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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

  public get changeDetectionCheck(): string {
    // console.log('changeDetectionCheck');
    return 'check';
  }

  public updateUserInterval: any = null;

  constructor() {
  }

  public toggleMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('QWEQWEQWEQWE');
    // this.updateUserInterval = setInterval(() => {
    //   console.log('QWEQWEQWEQWE');
    // }, 1000);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    if (this.updateUserInterval) {
      clearInterval(this.updateUserInterval);
    }
    console.log('ngOnDestroy');
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
