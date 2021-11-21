//REPRESENTAÇÃO DE COMO UM DADO É SALVO EM NOSSA APLICAÇÃO!

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

//A classe é um paramentro qu estamos passando aqui para nossa entidade
//o decoration, ou 'Entity' deve ser colocado sempre em cima da classe
//Ele está disponivél apenas no typescript
@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;


  @Column()
  email: string;


  @Column()
  password: string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



}

export default User;
