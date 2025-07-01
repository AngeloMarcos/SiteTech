import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './projects.service';
@Controller('projects')
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
  @Post()
  create(@Body() data: CreateProjectDto) {
    return this.service.create(data);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateProjectDto) {
    return this.service.update(+id, data);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
