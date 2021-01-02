import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMessages1609144258800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "messages",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "body",
                    type: "text"
                },
                {
                    name: "user_id",
                    type: "integer"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: Date.now()
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: Date.now()
                }
            ],
            foreignKeys: [{
                name: "MessageUser",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
