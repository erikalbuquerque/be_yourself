import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRecentChat1611610328658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "recent_chat",
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
            name: "user_id",
            type: "integer",
          },
          {
            name: "recipient_id",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: Date.now(),
          },
        ],
        foreignKeys: [
          {
            name: "RecentMessage",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("recent_chat");
  }
}
