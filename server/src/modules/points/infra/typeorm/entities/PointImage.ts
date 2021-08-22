import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Point from './Point';

@Entity('point_images')
class PointImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  point_id: string;

  @ManyToOne(() => Point, point => point.pointImages)
  @JoinColumn({ name: 'point_id' })
  point: Point;

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date;
}

export default PointImage;
