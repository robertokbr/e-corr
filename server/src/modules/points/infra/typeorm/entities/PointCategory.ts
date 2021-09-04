import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Point from './Point';

@Entity('point_categories')
class PointCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  // Relations

  @OneToMany(() => Point, point => point.category)
  points: Point[];
}

export default PointCategory;
