import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { LoggingService } from './logging.service';

@Module({
  imports: [ElasticsearchModule.register({
    host: process.env.ELASTICSEARCH_HOST,
  })],
  providers: [LoggingService],
})
export class LoggingModule {}
