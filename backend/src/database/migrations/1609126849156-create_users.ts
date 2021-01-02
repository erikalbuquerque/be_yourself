import { MigrationInterface, QueryRunner, Table, Unique } from "typeorm";

export class createUsers1609126849156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "avatar",
            type: "text",
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: Date.now()
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: Date.now()
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users")
  }
}
