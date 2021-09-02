import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import PointCategory from '@modules/points/infra/typeorm/entities/PointCategory';

export default class CreateCategories implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(PointCategory)
      .values([
        { name: 'Condomínio', description: 'Imóvel dentro de area fechada' },
        { name: 'Apartamento', description: 'Imóvel com vários andares' },
        { name: 'Casa', description: 'Imóvel de área única' },
        {
          name: 'Comércial',
          description: 'Imóvel destinado a prestação de serviço',
        },
      ])
      .execute();
  }
}
