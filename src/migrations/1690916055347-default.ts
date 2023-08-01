import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1690916055347 implements MigrationInterface {
    name = 'Default1690916055347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "combos" ADD "products_id" jsonb NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "combos" DROP COLUMN "products_id"`);
    }

}
