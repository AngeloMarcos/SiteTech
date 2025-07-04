// backend/src/leads/lead.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Lead {
  @ApiProperty({ description: 'Identificador único do lead' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nome do contato', required: false })
  @Column({ nullable: true })
  name?: string;

  @ApiProperty({ description: 'E-mail do contato', required: false })
  @Column({ nullable: true })
  email?: string;

  @ApiProperty({ description: 'Mensagem enviada pelo cliente' })
  @Column('text')
  message: string;

  @ApiProperty({ description: 'Data de criação do lead' })
  @CreateDateColumn()
  createdAt: Date;
}
