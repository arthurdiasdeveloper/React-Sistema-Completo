import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateAppointments1633963828278 implements MigrationInterface {
  //Método up, vamos colocar o que desejamos que seja feito
  //quando essa migration for execultada.
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',

          },
          {
            name: 'provider',
            type: 'uuid',
            isNullable: false,

          },
          {
            name: 'date',
            type: 'timestamp',
            isNullable: false,

          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          //Já o updated_at ele irá armazenar a última vez que o usuário sofreu
          //alguma alteração.
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },

        ]
      })
    )
  }
  //no método down, vamos utilizar: se acontecer algum problema e precisamos voltar
  // na outra versão, vamos utiliza-lo para desfazer.
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }

}
