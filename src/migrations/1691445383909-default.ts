import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691445383909 implements MigrationInterface {
  name = "Default1691445383909"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "menu" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "restaurant_id" text NOT NULL, "sessão" text NOT NULL, "product_id" text NOT NULL, "combo_id" text NOT NULL, CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "menu"`)
  }
}
