import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateQuartierDto {
  @ApiPropertyOptional({ example: 'La Défense' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: "Quartier d'affaires" })
  @IsOptional()
  @IsString()
  description?: string;
}
