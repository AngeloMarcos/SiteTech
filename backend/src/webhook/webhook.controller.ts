// backend/src/webhook/webhook.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LeadsService } from '../leads/leads.service';
import { CreateLeadDto } from '../leads/dto/create-lead.dto';

@ApiTags('webhook')
@Controller('webhook')
export class WebhookController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('lead')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Recebe simulação de lead via webhook' })
  @ApiBody({ type: CreateLeadDto })
  @ApiResponse({ status: 200, description: 'Lead processado com sucesso' })
  async handleLead(@Body() dto: CreateLeadDto) {
    // Aqui podemos validar/verificar assinatura, etc.
    const lead = await this.leadsService.create(dto);
    return { status: 'ok', leadId: lead.id };
  }
}
