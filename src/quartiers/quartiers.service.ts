import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quartier } from './quartier.entity';
import { CreateQuartierDto } from './dto/create-quartier.dto';
import { UpdateQuartierDto } from './dto/update-quartier.dto';

@Injectable()
export class QuartiersService {
  constructor(
    @InjectRepository(Quartier)
    private readonly quartiersRepository: Repository<Quartier>,
  ) {}

  async create(dto: CreateQuartierDto): Promise<Quartier> {
    const existing = await this.quartiersRepository.findOne({
      where: { name: dto.name },
    });
    if (existing) {
      throw new ConflictException('Ce quartier existe déjà');
    }
    const quartier = this.quartiersRepository.create(dto);
    return this.quartiersRepository.save(quartier);
  }

  async findAll(): Promise<Quartier[]> {
    return this.quartiersRepository.find();
  }

  async findById(id: string): Promise<Quartier> {
    const quartier = await this.quartiersRepository.findOne({ where: { id } });
    if (!quartier) {
      throw new NotFoundException('Quartier introuvable');
    }
    return quartier;
  }

  async update(id: string, dto: UpdateQuartierDto): Promise<Quartier> {
    await this.findById(id);
    await this.quartiersRepository.update(id, dto);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.quartiersRepository.softDelete(id);
  }
}
