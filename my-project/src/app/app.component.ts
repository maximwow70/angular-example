import { Component, OnInit } from '@angular/core';
import { PermissionService } from './services/permission-service/permission-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private _permissionService: PermissionService
  ) {
  }

  ngOnInit(): void {
    // this._permissionService.setPermission('1');
  }
}
