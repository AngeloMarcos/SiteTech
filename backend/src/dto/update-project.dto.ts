// src/projects/dto/update-project.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProjectDto {
  @ApiPropertyOptional({ example: 'Novo Título do Projeto' })
  title?: string;

  @ApiPropertyOptional({ example: 'Nova descrição (opcional).' })
  description?: string;
}
