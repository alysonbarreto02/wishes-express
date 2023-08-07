import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691444350746 implements MigrationInterface {
  name = "Default1691444350746"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "wishes_per_day" integer NOT NULL, "have_pc" boolean NOT NULL, "owner_phone" character varying(20) NOT NULL, "owner_email" text NOT NULL, "name_owner" text NOT NULL, CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "restaurants"`)
  }
}
