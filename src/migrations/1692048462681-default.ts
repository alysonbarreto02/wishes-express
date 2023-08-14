import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692048462681 implements MigrationInterface {
    name = 'Default1692048462681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "CEP" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "CEP"`);
    }

}
