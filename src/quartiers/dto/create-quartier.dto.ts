import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuartierDto {
  @ApiProperty({ example: 'La Défense' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: "Quartier d'affaires" })
  @IsOptional()
  @IsString()
  description?: string;
}
