import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({ summary: 'find all user' })
  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @ApiOperation({ summary: 'find one user' })
  @Get('/:id')
  async getOne(@Param('id') userId: number): Promise<User> {
    return await this.usersService.getOne(userId);
  }

  @ApiOperation({ summary: 'create user' })
  @Post()
  create(@Body() userData: CreateUserDto): Promise<CreateUserDto & User> {
    return this.usersService.create(userData);
  }

  @ApiOperation({ summary: 'update user' })
  @Put('/:id')
  patch(@Param('id') userId: number, @Body() updateData: UpdateUserDto): Promise<UpdateUserDto> {
    return this.usersService.update(userId, updateData);
  }

  @ApiOperation({ summary: 'delete user' })
  @Delete('/:id')
  remove(@Param('id') userId: number): Promise<boolean> {
    return this.usersService.deleteOne(userId);
  }
}
