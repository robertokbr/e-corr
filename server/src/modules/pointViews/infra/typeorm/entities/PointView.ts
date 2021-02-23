import Point from '@modules/points/infra/typeorm/entities/Point';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('point_views')
class PointViews {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  point_id: string;

  @ManyToOne(() => Point)
  @JoinColumn({ name: 'point_id' })
  points: Point;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default PointViews;
