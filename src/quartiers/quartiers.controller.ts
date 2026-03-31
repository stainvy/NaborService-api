import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { QuartiersService } from './quartiers.service';
import { CreateQuartierDto } from './dto/create-quartier.dto';
import { UpdateQuartierDto } from './dto/update-quartier.dto';

@ApiTags('Quartiers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('quartiers')
export class QuartiersController {
  constructor(private readonly quartiersService: QuartiersService) {}

  @Post()
  async create(@Body() dto: CreateQuartierDto) {
    return this.quartiersService.create(dto);
  }

  @Get()
  async findAll() {
    return this.quartiersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.quartiersService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateQuartierDto) {
    return this.quartiersService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.quartiersService.remove(id);
    return { message: 'Quartier supprimé' };
  }
}
