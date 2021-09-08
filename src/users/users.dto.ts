import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({
    example: 'jay',
    description: 'name',
    required: true
  })
  @Type(() => String)
  @IsString()
  readonly name!: string;

  @ApiProperty({
    example: 26,
    description: 'age',
    required: true
  })
  @Type(() => Number)
  @IsInt()
  readonly age!: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
