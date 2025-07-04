// src/projects/projects.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Project } from './project.entity';

/**
 * DTO para criar um projeto
 */
export interface CreateProjectDto {
  title: string;
  description: string;
}

/**
 * DTO para atualizar um projeto
 */
export interface UpdateProjectDto {
  title?: string;
  description?: string;
}

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly repo: Repository<Project>,
  ) {}

  /**
   * Cria um novo projeto
   */
  create(data: CreateProjectDto): Promise<Project> {
    const project = this.repo.create(data);
    return this.repo.save(project);
  }

  /**
   * Retorna todos os projetos
   */
  findAll(): Promise<Project[]> {
    return this.repo.find();
  }

  /**
   * Retorna um único projeto por ID
   */
  findOne(id: number): Promise<Project | null> {
    return this.repo.findOne({ where: { id } });
  }

  /**
   * Atualiza os dados de um projeto existente
   */
  update(id: number, data: UpdateProjectDto): Promise<UpdateResult> {
    return this.repo.update(id, data);
  }

  /**
   * Remove um projeto
   */
  remove(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
