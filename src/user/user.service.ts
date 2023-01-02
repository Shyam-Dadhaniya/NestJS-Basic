import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from "express";
import { Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  get() {
    return this.userRepo.find();
  }

  create(CreateUserDto: CreateUserDto) {
    return this.userRepo.save(CreateUserDto);
  }

  update(UpdateUserDto: UpdateUserDto, userId: number) {
    return this.userRepo.update(userId, UpdateUserDto);
    // return { body: UpdateUserDto, userId };
  }

  // show(param: { userId: number })
  show(userId: number) {
    return this.userRepo.findOne({ where: { id: userId } });
  }

  deleteUser(userId: number) {
    return this.userRepo.delete(userId);
  }
}
