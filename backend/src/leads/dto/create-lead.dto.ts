// backend/src/leads/dto/create-lead.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateLeadDto {
  @ApiProperty({ description: 'Nome do contato', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'E-mail do contato', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Mensagem ou detalhes do projeto' })
  @IsString()
  message: string;
}
