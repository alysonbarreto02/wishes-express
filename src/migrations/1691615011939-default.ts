import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1691615011939 implements MigrationInterface {
    name = 'Default1691615011939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "productsId" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_4d542270767b10d95aa3ee12968" FOREIGN KEY ("productsId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_4d542270767b10d95aa3ee12968"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productsId"`);
    }

}
