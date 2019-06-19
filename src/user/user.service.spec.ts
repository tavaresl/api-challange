import { Test, TestingModule } from '@nestjs/testing';
import { HttpService, HttpModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { User } from './model/user';
import { Address } from './model/address';
import { Company } from './model/company';

describe('UserService', () => {
  let http: HttpService;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [UserService],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of users', async () => {
    const result: UserDTO[] = [{
      id: 1,
      name: 'John Wick',
      username: 'babayaga',
      phone: '1-463-123-4447',
      email: 'john.wick@continental.com',
      website: 'johnwick.movie',
      address: {
        street: 'Wall Street',
        suite: 'Suite 733',
        city: 'New York',
        zipcode: '92998-3874',
      },
     company: {
        name: 'Continental Hotel',
        catchPhrase: 'You have served. You will be of service.',
        bs: 'hospitality',
      },
    }];

    jest.spyOn(http, 'get').mockImplementation(() => ({
      toPromise: jest.fn(() => Promise.resolve({ data: [...result] })),
    }) as any);

    expect(await service.getAll()).toEqual([
      new User(
        'John Wick',
        'john.wick@continental.com',
        '1-463-123-4447',
        'johnwick.movie',
        new Address(
          'Wall Street',
          'Suite 733',
          'New York',
        ),
        new Company(
          'Continental Hotel',
          'You have served. You will be of service.',
        ),
      ),
    ]);
  });
});
