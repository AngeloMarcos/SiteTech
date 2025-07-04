// backend/src/leads/leads.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { LeadsService } from './leads.service';
import { Lead } from './lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';

@ApiTags('leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly svc: LeadsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo lead' })
  @ApiBody({ type: CreateLeadDto })
  @ApiResponse({ status: 201, description: 'Lead criado', type: Lead })
  create(@Body() dto: CreateLeadDto): Promise<Lead> {
    return this.svc.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os leads' })
  @ApiResponse({ status: 200, description: 'Lista de leads', type: [Lead] })
  findAll(): Promise<Lead[]> {
    return this.svc.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lead por ID' })
  @ApiParam({ name: 'id', description: 'ID do lead', type: Number })
  @ApiResponse({ status: 200, description: 'Lead removido' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}
