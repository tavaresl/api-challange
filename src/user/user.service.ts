import { Injectable, HttpService } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { User } from './model/user';
import { Address } from './model/address';
import { Company } from './model/company';

@Injectable()
export class UserService {

  constructor(
    private readonly http: HttpService,
  ) { }

  public async getAll(): Promise<User[]> {
    const response = await this.http.get<UserDTO[]>('https://jsonplaceholder.typicode.com/users').toPromise();
    const users = response.data.map<User>(userDTO => new User(
      userDTO.name,
      userDTO.email,
      userDTO.phone,
      userDTO.website,
      new Address(
        userDTO.address.street,
        userDTO.address.suite,
        userDTO.address.city,
      ),
      new Company(
        userDTO.company.name,
        userDTO.company.catchPhrase,
      ),
    ));

    return users;
  }
}
