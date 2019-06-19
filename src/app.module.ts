import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [UserModule, LoggingModule],
})
export class AppModule {}
