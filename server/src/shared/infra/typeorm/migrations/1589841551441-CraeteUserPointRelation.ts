import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CraeteUserPointRelation1589841551441
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'points',
      new TableForeignKey({
        name: 'point_user',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'point_views',
      new TableForeignKey({
        name: 'point_Point_views',
        columnNames: ['point_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'points',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('points', 'point_user');
    await queryRunner.dropForeignKey('point_views', 'point_Point_views');
  }
}
