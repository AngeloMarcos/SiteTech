// src/projects/projects.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

import { ProjectsService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectDto } from './../dto/create-project.dto';
import { UpdateProjectDto } from './../dto/update-project.dto';


@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly svc: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os projetos' })
  @ApiResponse({ status: 200, description: 'Lista de projetos', type: [Project] })
  findAll(): Promise<Project[]> {
    return this.svc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar projeto por ID' })
  @ApiParam({ name: 'id', description: 'ID numérico do projeto', type: Number })
  @ApiResponse({ status: 200, description: 'Projeto encontrado', type: Project })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    return this.svc.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo projeto' })
  @ApiBody({ type: CreateProjectDto })
  @ApiResponse({ status: 201, description: 'Projeto criado', type: Project })
  create(@Body() dto: CreateProjectDto): Promise<Project> {
    return this.svc.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um projeto existente' })
  @ApiParam({ name: 'id', description: 'ID numérico do projeto', type: Number })
  @ApiBody({ type: UpdateProjectDto })
  @ApiResponse({ status: 200, description: 'Projeto atualizado' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProjectDto,
  ) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um projeto' })
  @ApiParam({ name: 'id', description: 'ID numérico do projeto', type: Number })
  @ApiResponse({ status: 200, description: 'Projeto removido' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}
