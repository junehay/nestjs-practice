import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './types/cats';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
}
