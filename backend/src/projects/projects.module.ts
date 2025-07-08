// backend/src/projects/projects.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Project } from './project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService }    from './project.service';  // <— ProjectsService

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectsService],  // <— ProjectsService
  exports: [ProjectsService],
})
export class ProjectsModule {}
