// src/projects/dto/create-project.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'Meu Site Institucional' })
  title: string;

  @ApiProperty({ example: 'Descrição breve do projeto.' })
  description: string;
}
