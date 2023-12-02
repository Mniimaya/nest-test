import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'mail@mail.com', description: 'Почта' })
  readonly email: string;

  @ApiProperty({ example: '12345abc', description: 'Пароль' })
  readonly password: string;
}
