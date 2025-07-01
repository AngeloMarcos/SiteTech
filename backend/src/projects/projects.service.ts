import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Project } from './project.entity';
export interface CreateProjectDto {
  title: string;
  description: string;
}
export interface UpdateProjectDto {
  title?: string;
  description?: string;
}
@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}
  create(data: CreateProjectDto): Promise<Project> {
    const project = this.repo.create(data);
    return this.repo.save(project);
  }
  findAll(): Promise<Project[]> {
    return this.repo.find();
  }
  findOne(id: number): Promise<Project | null> {
    return this.repo.findOne({ where: { id } });
  }
  update(id: number, data: UpdateProjectDto): Promise<UpdateResult> {
    return this.repo.update(id, data);
  }
  remove(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
