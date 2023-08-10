import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691676922646 implements MigrationInterface {
  name = "Default1691676922646"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "amount" TO "price"`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "price" TO "amount"`
    )
  }
}
