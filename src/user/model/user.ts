import { Address } from './address';
import { Company } from './company';

export class User {

  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public website: string,
    public address: Address,
    public company: Company,
  ) { }
}