// backend/src/webhook/webhook.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookController } from './webhook.controller';
import { LeadsModule } from '../leads/leads.module';

@Module({
  imports: [LeadsModule, TypeOrmModule],
  controllers: [WebhookController],
})
export class WebhookModule {}
