import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quartier } from './quartier.entity';
import { QuartiersService } from './quartiers.service';
import { QuartiersController } from './quartiers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quartier])],
  controllers: [QuartiersController],
  providers: [QuartiersService],
  exports: [QuartiersService],
})
export class QuartiersModule {}
