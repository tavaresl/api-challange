import { Controller, Get, UnprocessableEntityException, Logger } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @Get('/websites')
  public async getUsersWebsites() {
    try {
      const users = await this.userService.getAll();

      return users.map(user => user.website);
    } catch (err) {
      Logger.error(err.message);
      throw new UnprocessableEntityException();
    }
  }

  @Get('/')
  public async getUsersInfos() {
    try {
      const users = await this.userService.getAll();
      const sortedUsers = [...users.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })];

      return sortedUsers.map(user => ({
        name: user.name,
        email: user.email,
        companyName: user.company.name,
      }));
    } catch (err) {
      Logger.error(err.message);
      throw new UnprocessableEntityException();
    }
  }

  @Get('/addresses/suites')
  public async getUsersWhoLivesInSuites() {
    try {
      const users = await this.userService.getAll();
      const usersWhoLiveInSuites = users.filter(user =>
        Object.values(user.address).some(value => value.toLowerCase().includes('suite')));

      return usersWhoLiveInSuites;
    } catch (err) {
      Logger.error(err.message);
      throw new UnprocessableEntityException();
    }
  }
}
