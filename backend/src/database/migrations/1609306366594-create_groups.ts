import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createGroups1609306366594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "groups",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "avatar",
            type: "text",
          },
          {
            name: "background",
            type: "text",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: Date.now(),
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: Date.now(),
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("groups");
  }
}
