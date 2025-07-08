// backend/src/projects/projects.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly repo: Repository<Project>,
  ) {}

  create(dto: CreateProjectDto): Promise<Project> {
    const project = this.repo.create(dto);
    return this.repo.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Project | null> {
    return this.repo.findOne({ where: { id } });
  }

  // Novo método para buscar por slug
  findOneBySlug(slug: string): Promise<Project | null> {
    return this.repo.findOne({ where: { slug } });
  }

  update(id: number, dto: UpdateProjectDto): Promise<UpdateResult> {
    return this.repo.update(id, dto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
