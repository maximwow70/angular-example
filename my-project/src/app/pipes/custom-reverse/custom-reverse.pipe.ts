import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/components/user-list/models/user';

@Pipe({
  name: 'customReverse',
  pure: false
})
export class CustomReversePipe implements PipeTransform {

  transform(userList: User[], ...args: unknown[]): User[] {
    return [...userList].reverse();
  }

}
