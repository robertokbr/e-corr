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
import PointViews from '@modules/pointViews/infra/typeorm/entities/PointView';

@Entity('points')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User, user => user.points, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => PointViews, pointViews => pointViews.points)
  views: number;

  @Column()
  title: string;

  @Column()
  pictures: string;

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
