import { Component, ViewEncapsulation, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';
import { UserListService } from './user-list/_services/user-list/user-list.service';
import { UserListDataService } from './user-list/_services/user-list-data/user-list-data.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: []
})
// tslint:disable-next-line: max-line-length
export class AppComponent {

  constructor() {
  }
}
