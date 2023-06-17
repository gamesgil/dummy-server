import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  users = ['one', 'two', 'three', 'four'];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string[] {
    return this.users;
  }

  @Post()
  addUser(@Body() { name }: { name: string }) {
    this.users.push(name);

    return this.users;
  }

  @Delete()
  removeUser(@Body() { name }: { name: string }) {
    if (this.users.includes(name)) {
      this.users.splice(this.users.indexOf(name), 1);
    }

    return this.users;
  }
}
