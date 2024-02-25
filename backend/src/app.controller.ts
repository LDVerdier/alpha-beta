import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './persistence/repositories/users';
import { User } from './user';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(Users) private readonly users: Users,
  ) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.users.find();
  }
}
