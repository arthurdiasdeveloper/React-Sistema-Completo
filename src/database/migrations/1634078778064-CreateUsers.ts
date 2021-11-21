import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1634078778064 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',

          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,

          },
          {
            name: 'email',
            type: 'varchar',
            //Não é nescessário colocar isNullable, porque como padrão o postgree deixa
            //os campos como nulo.
            //isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          //o created_at é nescessário para sabermos quando um usuário
          //se cadastrou na aplicação.
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
    await queryRunner.dropTable('users');
  }

}


