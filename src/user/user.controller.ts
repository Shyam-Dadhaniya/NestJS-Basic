import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
@Controller('/user')
export class UserController {
  //   private UserService;
  //   constructor() {
  //     this.UserService = new UserService();
  //   }
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }
  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.update(req, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.show(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param);
  }
}
