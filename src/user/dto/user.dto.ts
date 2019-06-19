import { AddressDTO } from './address.dto';
import { CompanyDTO } from './company.dto';

export class UserDTO {
  public id: number;
  public name: string;
  public username: string;
  public phone: string;
  public email: string;
  public website: string;
  public address: AddressDTO;
  public company: CompanyDTO;
}
