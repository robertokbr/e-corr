import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PointTag from './PointTag';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => PointTag, pointTag => pointTag.tag_details)
  pointTag: PointTag[];
}

export default Tag;
