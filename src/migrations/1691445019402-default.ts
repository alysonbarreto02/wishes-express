import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691445019402 implements MigrationInterface {
  name = "Default1691445019402"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "price" numeric NOT NULL, "quantity" text NOT NULL, "image" text NOT NULL, "restaurant_id" text NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`)
  }
}
