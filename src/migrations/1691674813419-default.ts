import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691674813419 implements MigrationInterface {
  name = "Default1691674813419"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_7b3b507508cd0f86a5b2e923459"`
    )
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productId"`)
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "restaurant_id"`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD "restaurant_id" uuid NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_81ac8c38c90887ea5f4a8d160dd" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_81ac8c38c90887ea5f4a8d160dd"`
    )
    await queryRunner.query(
      `ALTER TABLE "products" DROP COLUMN "restaurant_id"`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD "restaurant_id" text NOT NULL`
    )
    await queryRunner.query(`ALTER TABLE "products" ADD "productId" uuid`)
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_7b3b507508cd0f86a5b2e923459" FOREIGN KEY ("productId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }
}
