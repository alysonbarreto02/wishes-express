import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1690824821905 implements MigrationInterface {
  name = "Default1690824821905"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Teste" ("id" SERIAL NOT NULL, "teste" text NOT NULL, "verdadeiro" boolean NOT NULL, CONSTRAINT "PK_3b12711c20ebf039dad74eee3cf" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Teste"`)
  }
}
