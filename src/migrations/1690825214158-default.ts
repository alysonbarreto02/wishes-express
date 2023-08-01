import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1690825214158 implements MigrationInterface {
  name = "Default1690825214158"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Teste" ADD "verdadeir2o" boolean NOT NULL`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Teste" DROP COLUMN "verdadeir2o"`)
  }
}
