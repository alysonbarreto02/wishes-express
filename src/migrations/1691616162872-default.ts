import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1691616162872 implements MigrationInterface {
  name = "Default1691616162872"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4"`
    )
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_4d542270767b10d95aa3ee12968"`
    )
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`
    )
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`
    )
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productsId"`)
    await queryRunner.query(`ALTER TABLE "products" ADD "productsId" uuid`)
    await queryRunner.query(
      `ALTER TABLE "restaurants" DROP CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68"`
    )
    await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" DROP CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb"`
    )
    await queryRunner.query(`ALTER TABLE "menu" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "menu" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" ADD CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" DROP CONSTRAINT "PK_2787c84f7433e390ff8961d552d"`
    )
    await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "adresses" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" ADD CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" DROP CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c"`
    )
    await queryRunner.query(`ALTER TABLE "combos" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "combos" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" ADD CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`
    )
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "orders" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_4d542270767b10d95aa3ee12968" FOREIGN KEY ("productsId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "FK_4d542270767b10d95aa3ee12968"`
    )
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`
    )
    await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "orders" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "combos" DROP CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c"`
    )
    await queryRunner.query(`ALTER TABLE "combos" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "combos" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "combos" ADD CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "adresses" DROP CONSTRAINT "PK_2787c84f7433e390ff8961d552d"`
    )
    await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "adresses" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "adresses" ADD CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "menu" DROP CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb"`
    )
    await queryRunner.query(`ALTER TABLE "menu" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "menu" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "menu" ADD CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" DROP CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68"`
    )
    await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "id"`)
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "id" SERIAL NOT NULL`
    )
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id")`
    )
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "productsId"`)
    await queryRunner.query(`ALTER TABLE "products" ADD "productsId" integer`)
    await queryRunner.query(
      `ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`
    )
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "products" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`
    )
    await queryRunner.query(
      `ALTER TABLE "products" ADD CONSTRAINT "FK_4d542270767b10d95aa3ee12968" FOREIGN KEY ("productsId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4"`
    )
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id"`)
    await queryRunner.query(`ALTER TABLE "clients" ADD "id" SERIAL NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id")`
    )
  }
}
