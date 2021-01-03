import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1609534754443 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
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
            name: "path",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: true,
          },
          {
            name: "group_id",
            type: "integer",
            isNullable: true,
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
        foreignKeys: [
          {
            name: "AvatarUser",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          {
            name: "AvatarBackgroundGroup",
            columnNames: ["group_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "groups",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
