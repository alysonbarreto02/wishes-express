import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691521901925 implements MigrationInterface {
  name = "Default1691521901925"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT NOW()`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "deleted_at" SET DEFAULT NOW()`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ALTER COLUMN "created_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ALTER COLUMN "created_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ALTER COLUMN "created_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ALTER COLUMN "created_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "deleted_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "updated_at" DROP DEFAULT`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "created_at" DROP DEFAULT`
    )
  }
}
