import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createMessageRecipient1609199534348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "message_recipient",
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
            name: "isRead",
            type: "boolean",
            default: false,
          },
          {
            name: "recipient_id",
            type: "integer",
          },
          {
            name: "message_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "MessageRecipient",
            columnNames: ["message_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "messages",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("message_recipient")
  }
}
