import { Module, HttpModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggingModule } from '../logging/logging.module';

@Module({
  imports: [HttpModule, LoggingModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
