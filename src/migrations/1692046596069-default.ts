import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1692046596069 implements MigrationInterface {
  name = "Default1692046596069"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "have_pc"`)
    await queryRunner.query(
      `ALTER TABLE "restaurants" DROP COLUMN "owner_phone"`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" DROP COLUMN "owner_email"`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "phone" character varying(20) NOT NULL`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "phone"`)
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "owner_email" text NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "owner_phone" character varying(20) NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "have_pc" boolean NOT NULL`
    )
  }
}
