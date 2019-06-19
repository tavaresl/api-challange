import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HttpModule } from '@nestjs/common';

describe('User Controller', () => {
  let userService: UserService;
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [UserService],
      controllers: [UserController],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should return a list of all users\' websites', async () => {
    const users = [{
      id: 1,
      name: 'John Wick',
      website: 'johnwick.movie',
    }, {
      id: 2,
      name: 'Viggo Terasov',
      website: 'terasov.mob',
    }];

    jest.spyOn(userService, 'getAll').mockImplementation(() => Promise.resolve([...users] as any[]));

    expect(await userController.getUsersWebsites()).toEqual([
      'johnwick.movie',
      'terasov.mob',
    ]);
  });

  it('should return a list of all users', async () => {
    const users = [{
      id: 2,
      name: 'Viggo Terasov',
      email: 'viggo.terasov@terasov.mob',
      company: {
        name: 'Terasov Mob',
      },
    }, {
      id: 1,
      name: 'John Wick',
      email: 'john.wick@continental.com',
      company: {
        name: 'Continental Hotel',
      },
    }];

    jest.spyOn(userService, 'getAll').mockImplementation(() => Promise.resolve([...users] as any[]));

    expect(await userController.getUsersInfos()).toEqual([{
      name: 'John Wick',
      email: 'john.wick@continental.com',
      companyName: 'Continental Hotel',
    }, {
      name: 'Viggo Terasov',
      email: 'viggo.terasov@terasov.mob',
      companyName: 'Terasov Mob',
    }]);
  });

  it('should return a list of all users who lives in a suite', async () => {
    const users = [{
      id: 1,
      name: 'John Wick',
      address: {
        street: 'Wall Street',
        suite: 'Suite 733',
      },
    }, {
      id: 2,
      name: 'Viggo Terasov',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
      },
    }, {
      id: 3,
      name: 'Ms. Perkins',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
      },
    }];

    jest.spyOn(userService, 'getAll').mockImplementation(() => Promise.resolve([...users] as any[]));

    expect(await userController.getUsersWhoLivesInSuites()).toEqual([{
      id: 1,
      name: 'John Wick',
      address: {
        street: 'Wall Street',
        suite: 'Suite 733',
      },
    }, {
      id: 3,
      name: 'Ms. Perkins',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
      },
    }]);
  });
});
