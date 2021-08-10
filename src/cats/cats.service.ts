import { Injectable } from '@nestjs/common';
import { Cat } from './types/cats';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ name: 'star', age: 1, breed: 'cat' }];

  findAll(): Cat[] {
    return this.cats;
  }
}
