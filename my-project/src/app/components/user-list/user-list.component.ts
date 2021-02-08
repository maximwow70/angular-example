import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren, ɵConsole } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { User } from './models/user';
import { UserListDataService } from './services/user-list-data/user-list-data.service';
import { delay, filter, first, last, map, take, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, ReplaySubject } from 'rxjs';
import { UserListService } from './services/user-list/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, OnDestroy {

  private _destroySource$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  private _myObservable$: ReplaySubject<number> = new ReplaySubject<number>(10);

  @ViewChild(UserComponent)
  public userComponents: any;

  constructor(
    private _userListDataService: UserListDataService,
    private _cdr: ChangeDetectorRef,
    public userListService: UserListService,
  ) { }

  ngOnInit(): void {
    this._userListDataService.loadUserList()
      .pipe(
        take(1),
        takeUntil(this._destroySource$)
      )
      .subscribe((userList: User[]) => {
        this.userListService.userList = userList;
        this._cdr.detectChanges();
        console.log(userList)
      });

    this._userListDataService.loadUserList()
      .pipe(
        take(1),
        takeUntil(this._destroySource$)
      )
      .subscribe((userList: User[]) => {
        this.userListService.userList = userList;
        this._cdr.detectChanges();
        console.log(userList)
      });

    this._myObservable$.next(1.25);
    this._myObservable$.next(1.5);
    this._myObservable$
      .pipe(
        tap((value: number) => {
          console.log(value);
        }),
        delay(3000),
        map((value: number) => {
          return value * 2;
        })
      )
      .subscribe((value: number) => {
        console.log(value);
      });
    this._myObservable$.next(3);
    this._myObservable$.next(4);
    this._myObservable$.complete();
  }

  ngOnDestroy() {
    this._destroySource$.next(true);
    this._destroySource$.complete();
  }

}
