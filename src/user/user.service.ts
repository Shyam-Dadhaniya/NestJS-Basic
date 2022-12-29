import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  get() {
    return this.userRepo.find();
  }

  create(req: Request) {
    return this.userRepo.save(req.body);
  }

  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }

  show(param: { userId: number }) {
    return param;
  }

  deleteUser(param: { userId: number }) {
    return param;
  }
}
