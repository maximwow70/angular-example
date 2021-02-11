import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() {
  }

  public setPermission(permission: string): void {
    localStorage.setItem('admin-permission', permission);
  }

}
