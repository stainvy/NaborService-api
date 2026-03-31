import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quartier } from '../quartiers/quartier.entity';

export enum UserRole {
  RESIDENT = 'resident',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
  REPRESENTATIVE = 'representative',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.RESIDENT })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  totpSecret: string;

  @Column({ default: false })
  isTotpEnabled: boolean;

  @ManyToOne(() => Quartier, (quartier) => quartier.members, {
    nullable: true,
  })
  quartier: Quartier;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
