import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

// --- Enums CDC ---

export enum VisibilityEnum {
  PUBLIC = 'public',
  FRIENDS = 'friends',
  PRIVATE = 'private',
}

export enum MessagePolicyEnum {
  OPEN = 'open',
  FILTERED = 'filtered',
  CLOSED = 'closed',
}

export enum UserRoleEnum {
  RESIDENT = 'resident',
  NEIGHBOURHOOD_REP = 'neighbourhood_rep',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
}

// --- Entity ---

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'uuid', default: () => 'uuid_generate_v7()' })
  id: string;

  @Column({ name: 'first_name', type: 'varchar', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password_hash', type: 'varchar', nullable: false })
  passwordHash: string;

  @Column({ name: 'totp_secret', type: 'varchar', nullable: true })
  totpSecret: string | null;

  @Column({ name: 'stripe_account_id', type: 'varchar', unique: true, nullable: true })
  stripeAccountId: string | null;

  @Column({ name: 'neighbourhood_id', type: 'text', nullable: true })
  neighbourhoodId: string | null;

  @Column({
    type: 'enum',
    enum: VisibilityEnum,
    default: VisibilityEnum.PUBLIC,
  })
  visibility: VisibilityEnum;

  @Column({ type: 'text', nullable: true })
  bio: string | null;

  @Column({
    name: 'message_policy',
    type: 'enum',
    enum: MessagePolicyEnum,
    default: MessagePolicyEnum.OPEN,
  })
  messagePolicy: MessagePolicyEnum;

  @Column({ type: 'varchar', length: 5, nullable: false, default: 'fr' })
  locale: string;

  @Column({ name: 'profile_picture_mongo_id', type: 'text', nullable: true })
  profilePictureMongoId: string | null;

  @Column({ name: 'banner_mongo_id', type: 'text', nullable: true })
  bannerMongoId: string | null;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.RESIDENT,
  })
  role: UserRoleEnum;

  @Column({ name: 'last_login_at', type: 'timestamptz', nullable: true })
  lastLoginAt: Date | null;

  @Column({ name: 'password_changed_at', type: 'timestamptz', nullable: true })
  passwordChangedAt: Date | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
  deletedAt: Date | null;
}
