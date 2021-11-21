//REPRESENTAÇÃO DE COMO UM DADO É SALVO EM NOSSA APLICAÇÃO!

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import User from './User';

//A classe é um paramentro qu estamos passando aqui para nossa entidade
//o decoration, ou 'Entity' deve ser colocado sempre em cima da classe
//Ele está disponivél apenas no typescript
@Entity('appointments')
class Appointment {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: 'provider_id'})
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Appointment;
