import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class src1678767262850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "name",
                        type: "text",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "text",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        length: "11",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "11",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients");
    }

}
