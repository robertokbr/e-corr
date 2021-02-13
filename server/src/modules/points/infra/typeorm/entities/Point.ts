import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('point')
class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  adress: string;

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
