import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691520880445 implements MigrationInterface {
  name = "Default1691520880445"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "road" text NOT NULL, "number" integer NOT NULL, "neighborhood" text NOT NULL, "complement" text NOT NULL, "city" text NOT NULL, "UF" text NOT NULL, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "combos" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "price" numeric NOT NULL, "products_id" jsonb NOT NULL, "restaurant_id" uuid NOT NULL, CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "client_id" text NOT NULL, "restaurant_id" text NOT NULL, "total_value" numeric NOT NULL, "time_delivery" text NOT NULL, "address_id" text NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "orders"`)
    await queryRunner.query(`DROP TABLE "combos"`)
    await queryRunner.query(`DROP TABLE "adresses"`)
  }
}
