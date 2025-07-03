// backend/src/projects/projects.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProjectService } from './projects.service';
import { Project }        from './project.entity';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly svc: ProjectService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os projetos' })
  @ApiResponse({ status: 200, description: 'Lista de projetos', type: [Project] })
  findAll(): Promise<Project[]> {
    return this.svc.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Buscar projeto por slug' })
  @ApiParam({ name: 'slug', description: 'Slug único do projeto' })
  @ApiResponse({ status: 200, description: 'Projeto encontrado', type: Project })
  findOne(@Param('slug') slug: string): Promise<Project> {
    return this.svc.findOneBySlug(slug);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo projeto' })
  @ApiBody({ type: Project })
  @ApiResponse({ status: 201, description: 'Projeto criado', type: Project })
  create(@Body() dto: Partial<Project>): Promise<Project> {
    return this.svc.create(dto);
  }

  // ... PUT e DELETE, idem
}
