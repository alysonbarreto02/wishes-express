import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1691674188917 implements MigrationInterface {
    name = 'Default1691674188917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_4d542270767b10d95aa3ee12968"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "productsId" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_7b3b507508cd0f86a5b2e923459" FOREIGN KEY ("productId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_7b3b507508cd0f86a5b2e923459"`);
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "productId" TO "productsId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_4d542270767b10d95aa3ee12968" FOREIGN KEY ("productsId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
