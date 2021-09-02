import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import PointImage from './PointImage';
import PointViews from './PointView';
import PointCategory from './PointCategory';
import PointTag from './PointTag';

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  category_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  address: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Relations

  @ManyToOne(() => User, user => user.points, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => PointCategory, pointCategory => pointCategory.points, {
    eager: true,
  })
  @JoinColumn({ name: 'category_id' })
  category: User;

  @OneToMany(() => PointImage, pointImage => pointImage.point, {
    cascade: true,
    eager: true,
  })
  pointImages: PointImage[];

  @OneToMany(() => PointViews, pointViews => pointViews.point, {
    cascade: true,
    eager: true,
  })
  pointViews: PointViews[];

  @OneToMany(() => PointTag, pointTag => pointTag.point, {
    eager: true,
    cascade: true,
  })
  tags: PointTag[];
}

export default Point;
