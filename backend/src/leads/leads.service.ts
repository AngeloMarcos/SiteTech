// backend/src/leads/leads.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Lead } from './lead.entity';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private readonly repo: Repository<Lead>,
  ) {}

  /**
   * Cria um novo lead
   */
  create(dto: CreateLeadDto): Promise<Lead> {
    const lead = this.repo.create(dto);
    return this.repo.save(lead);
  }

  /**
   * Lista todos os leads
   */
  findAll(): Promise<Lead[]> {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  /**
   * Remove um lead por ID
   */
  remove(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
