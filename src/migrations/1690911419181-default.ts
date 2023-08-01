import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1690911419181 implements MigrationInterface {
    name = 'Default1690911419181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enterprises" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_a019e9afe6517b4f2a4588f2cce" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "enterprises"`);
    }

}
