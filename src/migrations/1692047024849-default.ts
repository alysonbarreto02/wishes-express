import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1692047024849 implements MigrationInterface {
    name = 'Default1692047024849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurants" ADD "cpf_cnpj" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "cpf_cnpj"`);
    }

}
