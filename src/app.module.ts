import { Module, ValidationPipe } from '@nestjs/common';
import { AddressesModule } from './addresses/addresses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_PIPE } from '@nestjs/core';
import { Constants } from './constants/constants';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AddressesModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(Constants.DATABASE_URL),
  ],
  controllers: [],
  providers: [{ provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
