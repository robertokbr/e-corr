import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CraeteUserPointRelation1589841551441
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'points',
      new TableForeignKey({
        name: 'Point_User',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('points', 'Point_User');
  }
}
