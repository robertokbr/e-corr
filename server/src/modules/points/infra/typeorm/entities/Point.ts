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

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.points, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

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

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column()
  category: 'Condominio' | 'Apartamento' | 'Casa' | 'Comercial';

  @Column()
  type: 'Aluguel' | 'Venda';

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
}

export default Point;
