import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691521650900 implements MigrationInterface {
  name = "Default1691521650900"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ALTER COLUMN "created_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ALTER COLUMN "created_at" DROP DEFAULT`
    )
  }
}
