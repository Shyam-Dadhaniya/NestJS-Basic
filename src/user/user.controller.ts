import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Delete,
  Patch,
  Body,
  ParseIntPipe,
} from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";
@Controller("/user")
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
  store(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.create(CreateUserDto);
  }

  @Patch("/:userId")
  update(
    @Body() UpdateUserDto: UpdateUserDto,
    @Param("userId", ParseIntPipe) userId: number
  ) {
    return this.userService.update(UpdateUserDto, userId);
  }

  @Get("/:userId")
  // getUser(@Param() param: { userId: number })
  getUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete("/:userId")
  deleteUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
