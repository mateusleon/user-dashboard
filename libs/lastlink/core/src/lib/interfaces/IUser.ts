import { IApiResponseBase } from './IApiResponseBase';
import { IAddress } from './IAddress';
import { ICompany } from './ICompany';

export interface IUser extends IApiResponseBase {
  name: string; // 'Leanne Graham';
  username: string; // 'Bret';
  email: string; // 'Sincere@april.biz';
  address: IAddress;
  phone: string; // '1-770-736-8031 x56442';
  website: string; // 'hildegard.org';
  company: ICompany;
}
