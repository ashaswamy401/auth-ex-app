import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
