import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async getOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    return user;
  }

  async create(userData: CreateUserDto): Promise<CreateUserDto & User> {
    return await this.userRepository.save(userData);
  }

  async update(id: number, updateData: UpdateUserDto): Promise<UpdateUserDto> {
    const targetData = await this.getOne(id);
    if (!targetData) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    await this.userRepository.update({ id }, updateData);

    return updateData;
  }

  async deleteOne(id: number): Promise<boolean> {
    const result = await this.userRepository.delete({ id });
    if (result.affected) {
      return true;
    }
    return false;
  }
}
