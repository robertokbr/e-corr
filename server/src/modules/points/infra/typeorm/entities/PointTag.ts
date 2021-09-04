import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Point from './Point';
import Tag from './Tag';

@Entity('point_tags')
class PointTag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  point_id: number;

  @Column()
  tag_id: number;

  @CreateDateColumn()
  created_at: Date;

  // Relations

  @ManyToOne(() => Point)
  @JoinColumn({ name: 'point_id' })
  point: number;

  @ManyToOne(() => Tag, tag => tag.pointTag, { eager: true })
  @JoinColumn({ name: 'tag_id' })
  tag_details: Tag;
}

export default PointTag;
