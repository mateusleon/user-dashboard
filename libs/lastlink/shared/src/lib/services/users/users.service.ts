import { Injectable } from '@angular/core';
import { IUser, TDomainsValues, TEnvironmentApisKeys } from '@lastlink/core';
import { CrudBaseService } from '../crud-base';

@Injectable({
  providedIn: 'root',
})
export class UserService extends CrudBaseService<IUser> {
  override readonly api: TEnvironmentApisKeys = 'jsonPlaceholderTypicode';
  override readonly domain: TDomainsValues = 'users';
}
