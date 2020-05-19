import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/user';
import { UserListService } from '../_services/user-list/user-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User = null;

  constructor() { }

  ngOnInit(): void {
  }

}
