import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsersGroups1609307226900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_groups",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            unsigned: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "integer",
          },
          {
            name: "group_id",
            type: "integer",
          },
          {
            name: "is_active",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: Date.now(),
          },
        ],
        foreignKeys: [
          {
            name: "userGroup",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
          },
          {
            name: "groupUser",
            columnNames: ["group_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "groups",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_groups");
  }
}
