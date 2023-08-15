import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692124116897 implements MigrationInterface {
    name = 'Default1692124116897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurants" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "UQ_6ed5e37a5a3021bd177acb48ca5" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "CEP" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5" FOREIGN KEY ("addressId") REFERENCES "adresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "CEP"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "UQ_6ed5e37a5a3021bd177acb48ca5"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "addressId"`);
    }

}
