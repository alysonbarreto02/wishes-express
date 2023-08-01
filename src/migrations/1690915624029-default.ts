import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1690915624029 implements MigrationInterface {
    name = 'Default1690915624029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "combos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "products_id" jsonb NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "products_id"`);
        await queryRunner.query(`DROP TABLE "combos"`);
    }

}
