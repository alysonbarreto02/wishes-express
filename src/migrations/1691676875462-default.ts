import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1691676875462 implements MigrationInterface {
    name = 'Default1691676875462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "price" TO "amount"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "amount" TO "price"`);
    }

}
